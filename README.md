# Product list
Страница вывода списка товаров (изначально список пуст).

https://aslyubavin.github.io/Product-List/

### Форма
Для добавления товара необходимо заполнить форму. Поля "Имя", "Ссылка", "Цена" - обязательные, форма не отправится, пока данные поля пустые. При заполнении всех обязательных полей кнопка становится активной для добавления товара в список.

<img src="readme/form1.png" width="150" height="200" />
<img src="readme/form2.png" width="150" height="200" />

### Список товаров
Список формируется путем добавления новых товаров через форму.
Данные по товару сохраняются в localStorage, что позволяет сохранять список при обновлении/закрытии страницы браузера.

- Цены отображаются с учетом разделения на разряды (тысячи).
- При наведении курсора мыши на товар появляется иконка удаления данного товара (на малых разрешениях экрана иконка активна всегда). 
- При клике на изображение товара открывается полное изображение.

<img src="readme/item1.png" width="200" height="132" />
<img src="readme/item2.png" width="200" height="132" />

### Сортировка
Меню сортировки позволяет сортировать товары в списке:
- по возрастанию цены;
- по убыванию цены;
- по наименованию;
- дефолтное значение;

<img src="readme/sort.png" width="200" height="132" />
