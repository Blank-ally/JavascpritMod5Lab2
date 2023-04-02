$(function (e) {
    $('#removeDone').hide();
    $('#toDoForm').on('submit', function (e) {
        e.preventDefault()
        let newDivEle = document.createElement('div');
        let newH3Ele = document.createElement('h3');
        let newPEle = document.createElement('p');


        let $taskName = $('#toDoTask').val();
        let $taskDesciption = $('#toDoTaskDescription').val();

        $(newH3Ele).text($taskName);
        $(newPEle).text($taskDesciption);

        $(newDivEle).append(newH3Ele, newPEle);
        newDivEle.classList.add('task', 'low');

        $('.tasks').append(newDivEle);
        this.reset();
    })

    $('.tasks').on('click', function (e) {
      
        const $closestTask = $(e.target).closest('.task')
        if ($closestTask.hasClass('low')) {
            $closestTask.removeClass('low').addClass('high');
        } else if ($closestTask.hasClass('high')) {
            $closestTask.removeClass('high').addClass('done');
            $('#removeDone').show();

        } else {
            $closestTask.removeClass('done').addClass('low');
            $('#removeDone').hide();

        }

        if($('.task').hasClass('done')){
            $('#removeDone').show();

        }
    });

    

    $('#removeDone').on('click',function(e){
        $(this).fadeOut();
        $('.done').slideUp(1000,function(e){
            $('.done').remove()
        })

    })


});