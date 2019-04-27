// $(function() {
//   var showMoreButtons = $('.show-more');
//
//   showMoreButtons.map(function(el){
//     el.addEventListener('click', function (e) {
//       console.log(e)
//     })
//   });
// })


function showMore(id) {
  let button = $(`#card-show-more-${id}`);
  let text = $(`#card-description-${id}`);
  $(button).toggleClass('showed');
  $(text).toggleClass('showed');
}

function clearAlert(e) {
  $(e).slideUp();
}

function rate(id) {
  $.post('/api/auth/rate', {id})
    .done(function(res) {
      if(res.ok) {
        let count = res.data.count;

        $('#rate_' + id).toggleClass('rated');
        $('#rate_'+ id +' .sum').text(count);
      }
      else {
        alert(res.error);
      }
    })
    .fail(function(error) {
      console.log(error);
    })
}
