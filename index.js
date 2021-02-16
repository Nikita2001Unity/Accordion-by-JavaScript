let accordions;

const accordionWrapper = document.querySelector('.accordion-wrapper');

const contentData = [
    {
        id: 1,
        title :'About company',
        content: `Компания «Ярослав» - это национальный лидер в текстильной отрасли Украины с многолетней историей, ценностями и традициями.
        Компания «Ярослав» объединяет в себе 4 производственных предприятия, которые специализируются на выпуске постельного белья, пледов, одеял, матрасов, товаров для детей, кухонного и других видах текстиля.`
    },
    {
        id: 2,
        title :'Choose us!',
        content: `Оснащаем сервис программным обеспечением:
        программа подбора фильтров, масел, тех жид-костей, их объем при обслуживании, интервалов замены в разных узлах автомобиля
        база  данных  конструктивных  особенностей, необходимых для обслуживания тех жидкостей в автомобилях
        программа  складского  учета,  выписки  заказ-нарядов, ведения истории обслуживания клиен-тов и т.д.`
    },
    {
        id: 3,
        title :'Contacts',
        content: `В период с 8 по 24 января 2021 года наш сайт работает в обычном режиме и Вы можете оформить заказ в любое время.

        Мы расширили возможности доставки для жителей Киева. Теперь Вы можете заказать безопасную доставку курьером по Киеву с примеркой.
        
        Преимущества данного выбора доставки: возможность комфортной примерки по тому адресу, который Вы выберете. Курьер ожидает до 15 минут. Вы оплачиваете только то, что Вам подошло.
        
        Также работают другие виды доставки по Вашему выбору: Новая почта, Укрпочта, Justin.`
    },
    {
        id: 4,
        title :'Our partners',
        content: `'Центр продажи проектов', 'Тротуарная плитка Золотой Мандарин', 'Терасные и фасадные системы Wood Plast', 'Системы автополива Rain Bird', 'Системы автополива Hunter', 'Профессиональные стандарты водоотведения Standartpark',`
    },
    {
        id: 5,
        title :'Discounts',
        content: 'Скидки распростанятся на всех постоянных покупателей при наличии карты магазина'
    },
];

const CreateTemplate = (item) => {
   return `
    <div class="accordion-item">
            <div class="accordion-item-title">
                ${item.title}
            </div>
            <div class="accordion-item-content">
                ${item.content}
            </div>
    </div>
    `
}

const fillHTMLList = () => {
    contentData.forEach(item => {
        accordionWrapper.innerHTML += CreateTemplate(item); 
    })
    accordions = document.querySelectorAll('.accordion-item')
}

fillHTMLList();
if(accordions){
for (const item of accordions) {
    item.addEventListener('click',function(){
        if(this.classList.contains('active')){
            this.classList.remove('active');
        }
        else{
            for (el of accordions) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}
}