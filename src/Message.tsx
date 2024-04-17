//PascalCasing
function Message() { 
    //JSX = JavaScript XML -> the code is converted to html
    const name = 'Andreea';
    if(name) 
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;