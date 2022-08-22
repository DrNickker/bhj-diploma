/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
    /**
     * Устанавливает текущий элемент в свойство element
     * Регистрирует обработчики событий с помощью Modal.registerEvents()
     * Если переданный элемент не существует,
     * необходимо выкинуть ошибку.
     * */

    constructor(element) {
        if (element != null) {
            this.element = element;
            this.registerEvents();
        } else {
            throw new Error("cant create obj of Modal.class because null-element has appeared in constructor");
        }
    }

    /**
     * При нажатии на элемент с data-dismiss="modal"
     * должен закрыть текущее окно
     * (с помощью метода Modal.onClose)
     * */

    registerEvents() {
/*         const closeButton = this.element.querySelectorAll('[data-dismiss="modal"]').array.forEach(btn => {
        btn.onclick = e => {
        this.onClose(e);
        }
    }); */


        Array.from(this.element.querySelectorAll('[data-dismiss="modal"]')).forEach((elem) => {
          elem.addEventListener('click', (e) => {
            this.onClose(e);
          });
        });
      }

    
    /**
     * Срабатывает после нажатия на элементы, закрывающие окно.
     * Закрывает текущее окно (Modal.close())
     * */
     onClose(e) {
        e.preventDefault();
        this.close();
      }
    /**
     * Открывает окно: устанавливает CSS-свойство display
     * со значением «block»
     * */
    open() {
        this.element.style.display = "block";
    }
    /**
     * Закрывает окно: удаляет CSS-свойство display
     * */
    close() {
        this.element.style.display = "";
    }
}