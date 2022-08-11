const messages=[
    'alejandro',
    "daniel",
    "jose",
    "marcos",
    'andres',
    'gustavo',
    'angelica',
    'maria'
]

const randommsg = ()=>{
    const  message = messages[Math.floor(Math.random()* messages.length)]

    console.log(message);
}


module.exports ={randommsg}