function fr(init, condition, step, body){
    function loop(i){
        if(!condition(i)) return;
        body(i);
        loop(step(i));
    }
    loop(init);
}

fr(
    0,
    (i) => i < 10,
    (i) => i+1,
    (i) => console.log(i)
)


