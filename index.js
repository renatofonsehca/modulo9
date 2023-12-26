
$(document).ready(function(){
    
    
    $('form').on('submit',function(e){
        e.preventDefault();
        const inserirTarefa=$('#tarefa').val();
        const novoItem=$('<li></li>')
        $(`<li>${inserirTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#tarefa').val('');
    })
        $('ul').on('click', function(e){
            if (e.target.classList.contains('check')){
                e.target.classList.remove('check');
            }else{
                e.target.classList.add('check');
            }
        })
    
    
})
