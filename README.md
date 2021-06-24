`HomeModule` - lazy loading модуль, содержит отображаемый по `/home` 
компонент `HomeComponent`, который в свою очередь использует `ModalService`
для отображения динамически создаваемой модалки (`ModalComponent`).

`ModalService` - сервис для отображения компонента модального окна

`ModalContainerDirective` - директива для указания места в котором будет происходить добавление динамического компонента (модальки)

`ModalComponent` - компонент, который, в нашем случае, должен динамически добавляться при открытии страницы `/home` и содержит сервис `HomeService`, который в свою очередь провайдится в `HomeModule` и к которому нужно иметь доступ даже если отображение будет происходить непосредственно в рутовом компоненте.

Обязательное условие: `HomeService` должен подключаться в `HomeModule`, а не в `HomeComponent` или рут (`AppComponent`)

Задача: `ModalService`, должен предоставлять возможность просасывать инжекторы из модулей подобных `HomeModule` (т.е. lazy loading модулей)

Сейчас это реализовано, но возможно есть варианты лучше, было бы здорово иметь возможность как-то получать инжектор содержащий провайдеры Lazy loading модуля при этом, чтобы в динамических компонентах, можно было применять привычную короткую запись для инжектирования сервисов
