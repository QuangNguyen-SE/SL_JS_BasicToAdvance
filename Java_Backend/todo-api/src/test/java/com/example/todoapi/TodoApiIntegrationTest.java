package com.example.todoapi;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(properties = {
        "spring.datasource.url=jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1",
        "app.seed-admin=true"
})
@AutoConfigureMockMvc
class TodoApiIntegrationTest {

    @Autowired MockMvc mvc;
    @Autowired ObjectMapper json;

    private String auth(String path, String user, String pass) throws Exception {
        String body = mvc.perform(post(path).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"username\":\"%s\",\"password\":\"%s\"}".formatted(user, pass)))
                .andReturn().getResponse().getContentAsString();
        JsonNode node = json.readTree(body);
        return node.has("token") ? node.get("token").asText() : null;
    }

    @Test
    void noTokenIsUnauthorized() throws Exception {
        mvc.perform(get("/api/todos")).andExpect(status().isUnauthorized());
    }

    @Test
    void invalidTokenIsUnauthorized() throws Exception {
        mvc.perform(get("/api/todos").header("Authorization", "Bearer abc.def.ghi"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void registerLoginAndCrud() throws Exception {
        mvc.perform(post("/api/auth/register").contentType(MediaType.APPLICATION_JSON)
                        .content("{\"username\":\"alice\",\"password\":\"secret1\"}"))
                .andExpect(status().isCreated());
        mvc.perform(post("/api/auth/register").contentType(MediaType.APPLICATION_JSON)
                        .content("{\"username\":\"alice\",\"password\":\"secret1\"}"))
                .andExpect(status().isConflict());
        mvc.perform(post("/api/auth/login").contentType(MediaType.APPLICATION_JSON)
                        .content("{\"username\":\"alice\",\"password\":\"wrong-pass\"}"))
                .andExpect(status().isUnauthorized());

        String token = auth("/api/auth/login", "alice", "secret1");
        String bearer = "Bearer " + token;

        String created = mvc.perform(post("/api/todos").header("Authorization", bearer)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"title\":\"Hoc Spring Boot\"}"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.done").value(false))
                .andReturn().getResponse().getContentAsString();
        long id = json.readTree(created).get("id").asLong();

        mvc.perform(post("/api/todos").header("Authorization", bearer)
                        .contentType(MediaType.APPLICATION_JSON).content("{\"title\":\"\"}"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.details.title").exists());

        mvc.perform(put("/api/todos/" + id).header("Authorization", bearer)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"title\":\"Hoc xong\",\"done\":true}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.done").value(true));

        mvc.perform(get("/api/todos").header("Authorization", bearer))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements").value(1));

        mvc.perform(delete("/api/todos/" + id).header("Authorization", bearer))
                .andExpect(status().isNoContent());
        mvc.perform(get("/api/todos/" + id).header("Authorization", bearer))
                .andExpect(status().isNotFound());
    }

    @Test
    void userCannotAccessAnotherUsersTodo() throws Exception {
        String bob = "Bearer " + auth("/api/auth/register", "bob", "secret1");
        String eve = "Bearer " + auth("/api/auth/register", "eve", "secret1");

        String created = mvc.perform(post("/api/todos").header("Authorization", bob)
                        .contentType(MediaType.APPLICATION_JSON).content("{\"title\":\"bi mat cua bob\"}"))
                .andReturn().getResponse().getContentAsString();
        long id = json.readTree(created).get("id").asLong();

        mvc.perform(get("/api/todos/" + id).header("Authorization", eve)).andExpect(status().isNotFound());
        mvc.perform(delete("/api/todos/" + id).header("Authorization", eve)).andExpect(status().isNotFound());
    }

    @Test
    void adminEndpointRequiresAdminRole() throws Exception {
        String user = "Bearer " + auth("/api/auth/register", "carol", "secret1");
        String admin = "Bearer " + auth("/api/auth/login", "admin", "admin123");

        mvc.perform(get("/api/admin/users").header("Authorization", user)).andExpect(status().isForbidden());
        mvc.perform(get("/api/admin/users").header("Authorization", admin)).andExpect(status().isOk());
    }
}
