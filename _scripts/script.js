$('section.pizza').waypoint( function
    /*direcao= respresenta um espaço reservado na memoria que irá guardar como o usuário chegou naquele elemento html,as duas possibilidadesserão up (subindo) ou down (descendo)*/ 
    (direcao){
        if (direcao == 'down') {
            $('section.pizza p').addClass ('animate__animated animate__fadeInUp');
        }
        if (direcao == 'up') {
            $('section.pizza p').removeClass ('animate__animated animate__fadeInUp');
        }

},{
    offset: '450px;'
})

