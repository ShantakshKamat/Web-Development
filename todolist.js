let input=prompt("Enter your plans for today!");
const todos=['Brush the teeth','Homework'];
while(input!=="quit"){
    if(input==='list'){
        console.log("***********");
        for(let i=0;i<todos.length;i++){
            console.log(`${i}:${todos[i]}`);
        }
        console.log("***********");
    }
    else if(input==='new'){
        const newtodo=prompt('Ok,What is your new todo?');
        todos.push(newtodo);
        console.log(`" ${newtodo} " added to the list`);
    }else if(input==='delete'){
        const index=parseInt(prompt("Enter the index to be deleted: "));
        const deleted=todos.splice(index,1);
        console.log(`Ok,Deleted ${deleted[0]}`);
    }
    input=prompt("Enter your plans for today!");
    if(input=="quit"){
        console.log("OK,BYE");
    }
}
