let input=prompt("What whould u like to do? ");

const todos=['chicken masala'];
while(input!=='quit' && input!=='q'){
    if(input==='list'){
        console.log('******************');
        for(let i=0; i<todos.length;i++){
            console.log(`${i}:${todos[i]}`);
        }
        console.log('******************');
    }else if(input==='new'){
        const  newTodo=prompt('ok!, whats is the new todo?')
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }else if(input==='delete'){
        const index=parseInt(prompt('Enter an index to delete: '));
        if(!Number.isNaN(index)){
            const deleted=todos.splice(index,1);
            console.log(`Ok,deleted ${deleted[0]}`)
        }else{
            console.log("Unknown Index");
        }

    }
    input=prompt('What whould u like to do? ');
}
console.log('Ok You Quit The App..BYE!!')