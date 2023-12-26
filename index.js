
$(document).ready(function(){
    
    
    $('form').on('submit',function(e){
        e.preventDefault();
        const inserirTarefa=$('#tarefa').val();
        const novoItem=$('<li></li>')
        $(`<li>${inserirTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#tarefa').val('');
    })
        $(novoItem).on('click', function(){
            $(novoItem).css({'text-decoration': 'line-through'});
        })
        
    
    function toggleRiscado() {
        $(event.target).toggleClass('riscado');
    }
    
    
    
})
