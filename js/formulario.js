$('#form-contato').submit(function(){

    var nome = $('#nome');
    var email = $('#email');
    var endereco = $('#endereco');
    var bairro = $('#bairro');
    var cidade = $('#cidade');
    var uf = $('#uf');
    var mensagem = $('#mensagem');
    var erro = $('.alert');
    var campo = $('#campo-erro');

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

  if(nome.val() ==''){
    erro.removeClass('d-none');
    campo.html('nome');
    nome.focus();
    nome.addClass('is-invalid');
    return false;
  }
  
  if(email.val() ==''){
    erro.removeClass('d-none');
    campo.html('email');
    nome.focus();
    nome.addClass('is-invalid');
    return false;
  }
  
  if(endereco.val() ==''){
    erro.removeClass('d-none');
    campo.html('endereco');
    nome.focus();
    nome.addClass('is-invalid');
    return false;
  }
  
  if(bairro.val() ==''){
    erro.removeClass('d-none');
    campo.html('bairro');
    nome.focus();
    nome.addClass('is-invalid');
    return false;
  }
  
  if(cidade.val() ==''){
    erro.removeClass('d-none');
    campo.html('cidade');
    nome.focus();
    nome.addClass('is-invalid');
    return false;
  }
  
  if(uf.val() ==''){
    erro.removeClass('d-none');
    campo.html('uf');
    nome.focus();
    nome.addClass('is-invalid');
    return false;
  }
  
  if(mensagem.val() ==''){
    erro.removeClass('d-none');
    campo.html('mensagem');
    nome.focus();
    nome.addClass('is-invalid');
    return false;
  }
    return true;
});