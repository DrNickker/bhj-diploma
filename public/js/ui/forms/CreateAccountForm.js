/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
 class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
      Account.create(data, function (err, response) {
          if (response.success === true) {
              App.getModal("createAccount").close();
              document.getElementById("new-account-form").reset();
              App.update();
          }
      })
  }
}