console.log('this is tutorial 17 on events');

document.getElementById('heading').addEventListener
('click',function(e){
    console.log('You have clicked the heading');
    variable = e.target;
    variable = e.target.className;
    variable = Array.from(e.target.className);

    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    console.log(variable);
});