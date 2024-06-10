// Get the button and container elements
const showMoreBtn = document.getElementById('show-more-btn');
const recommendationListContainer = document.getElementById('recommendation-list-container');

// Define the HTML for the recommendation list
const recommendationListHtml = `
<div class="recommendation-list">
                <div class="recommendation-item">
                    <a href="s_pred.html">
                        <div class="recommendation-card">
                            <div class="recommendation-card-content">
                                <img src="image/apartaments/apart_1/apartament.png" alt="Квартира" class="recommendation-card-img">                            <div class="recommendation-card-price">
                                    <span class="recommendation-card-price-number">4 393 333</span>
                                    <span class="recommendation-card-price-currency">₽</span>
                                </div>
                            </div>
                            <h3 class="recommendation-card-title">1-комн кв • 44 м² • 6 этаж в Басманном районе</h3>
                            <div class="recommendation-card-divider"></div>
                            <address class="recommendation-card-address">АО, р-н Басманный, Сыромятнический проезд, 7/14</address>
                        </div>
                    </a>
                </div>
                
                <div class="recommendation-item">
                    <a href="s_pred.html">
                        <div class="recommendation-card">
                            <div class="recommendation-card-content">
                                <img src="image/apartaments/apart_2/apart1.jpeg" alt="Квартира" class="recommendation-card-img">                            <div class="recommendation-card-price">
                                    <span class="recommendation-card-price-number">4 250 000</span>
                                    <span class="recommendation-card-price-currency">₽</span>
                                </div>
                            </div>
                            <h3 class="recommendation-card-title">Продается 1-комн. апартаменты, 14,3 м²</h3>
                            <div class="recommendation-card-divider"></div>
                            <address class="recommendation-card-address">Москва, ЮВАО, р-н Нижегородский, ш. Фрезер, 17АС1</address>
                        </div>
                    </a>
                </div>
                <div class="recommendation-item">
                    <a href="s_pred.html">
                        <div class="recommendation-card">
                            <div class="recommendation-card-content">
                                <img src="image/apartaments/apart_3/apart1.jpeg" alt="Квартира" class="recommendation-card-img">                            <div class="recommendation-card-price">
                                    <span class="recommendation-card-price-number">4 500 000</span>
                                    <span class="recommendation-card-price-currency">₽</span>
                                </div>
                            </div>
                            <h3 class="recommendation-card-title">Продается 1-комн. апартаменты, 17,8 м²</h3>
                            <div class="recommendation-card-divider"></div>
                            <address class="recommendation-card-address">Москва, САО, р-н Хорошевский, 3-я Магистральная ул., 20Б</address>
                        </div>
                    </a>
                </div>
                <div class="recommendation-item">
                    <a href="s_pred.html">
                        <div class="recommendation-card">
                            <div class="recommendation-card-content">
                                <img src="image/apartaments/apart_4/apart1.jpeg" alt="Квартира" class="recommendation-card-img">                            <div class="recommendation-card-price">
                                    <span class="recommendation-card-price-number">4 090 000</span>
                                    <span class="recommendation-card-price-currency">₽</span>
                                </div>
                            </div>
                            <h3 class="recommendation-card-title">Продается 1-комн. апартаменты, 11,2 м²
                                в ЖК «Эталон-Сити»</h3>
                            <div class="recommendation-card-divider"></div>
                            <address class="recommendation-card-address">Москва, ЮЗАО, р-н Южное Бутово, ул. Поляны, 5</address>
                        </div>
                    </a>
                </div>
            </div>
            <div class="recommendation-list">
                <div class="recommendation-item">
                    <a href="s_pred.html">
                        <div class="recommendation-card">
                            <div class="recommendation-card-content">
                                <img src="image/apartaments/apart_5/apart1.jpeg" alt="Квартира" class="recommendation-card-img">                            <div class="recommendation-card-price">
                                    <span class="recommendation-card-price-number">4 150 000</span>
                                    <span class="recommendation-card-price-currency">₽</span>
                                </div>
                            </div>
                            <h3 class="recommendation-card-title">Продается 1/2 квартиры, 53,9/31/9 м²</h3>
                            <div class="recommendation-card-divider"></div>
                            <address class="recommendation-card-address">Москва, ВАО, р-н Косино-Ухтомский, Святоозерская ул., 21</address>
                        </div>
                    </a>
                </div>
                
                <div class="recommendation-item">
                    <a href="s_pred.html">
                        <div class="recommendation-card">
                            <div class="recommendation-card-content">
                                <img src="image/apartaments/apart_6/apart1.jpeg" alt="Квартира" class="recommendation-card-img">                            <div class="recommendation-card-price">
                                    <span class="recommendation-card-price-number">4 500 000</span>
                                    <span class="recommendation-card-price-currency">₽</span>
                                </div>
                            </div>
                            <h3 class="recommendation-card-title">Продается 1/2 квартиры, 51/31/9 м²
                            </h3>
                            <div class="recommendation-card-divider"></div>
                            <address class="recommendation-card-address">Москва, ЮАО, р-н Чертаново Центральное, ул. Красного Маяка, 13К3</address>
                        </div>
                    </a>
                </div>
                <div class="recommendation-item">
                    <a href="s_pred.html">
                        <div class="recommendation-card">
                            <div class="recommendation-card-content">
                                <img src="image/apartaments/apart_7/apart1.jpeg" alt="Квартира" class="recommendation-card-img">                            <div class="recommendation-card-price">
                                    <span class="recommendation-card-price-number">2 990 000</span>
                                    <span class="recommendation-card-price-currency">₽</span>
                                </div>
                            </div>
                            <h3 class="recommendation-card-title">Продается 1-комн. апартаменты, 9,6 м²</h3>
                            <div class="recommendation-card-divider"></div>
                            <address class="recommendation-card-address">Москва, ВАО, р-н Северное Измайлово, Сиреневый бул., 15</address>
                        </div>
                    </a>
                </div>
                <div class="recommendation-item">
                    <a href="s_pred.html">
                        <div class="recommendation-card">
                            <div class="recommendation-card-content">
                                <img src="image/apartaments/apart_other/ap1.jpeg" alt="Квартира" class="recommendation-card-img">                            <div class="recommendation-card-price">
                                    <span class="recommendation-card-price-number">3 500 000</span>
                                    <span class="recommendation-card-price-currency">₽</span>
                                </div>
                            </div>
                            <h3 class="recommendation-card-title">Продается 1-комн. апартаменты, 11 м²</h3>
                            <div class="recommendation-card-divider"></div>
                            <address class="recommendation-card-address">Москва, ЦАО, р-н Пресненский, Стрельбищенский пер., 22А</address>
                        </div>
                    </a>
                </div>
            </div>

<a href="pred.html"><button class="more-btn">Показать ещё</button></a>
`;

// Add an event listener to the button
showMoreBtn.addEventListener('click', () => {
  // Remove the button
  showMoreBtn.remove();

  // Add the recommendation list to the container
  recommendationListContainer.innerHTML = recommendationListHtml;
});
// 
function showDiv1() {
    document.getElementById('div1').style.display = 'flex';
    document.getElementById('div2').style.display = 'none';
}

function showDiv2() {
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'flex';
}

document.getElementById('createDiv1Button1').addEventListener('click', showDiv1);
document.getElementById('createDiv1Button2').addEventListener('click', showDiv1);
document.getElementById('switchButton').addEventListener('click', showDiv2);
// ----

const images = [
    'image/apartaments/apart_2/apart1.jpeg',
    'image/apartaments/apart_2/apart2.jpeg',
    'image/apartaments/apart_2/apart3.jpeg',
    'image/apartaments/apart_2/apart4.jpeg',
    'image/apartaments/apart_2/apart5.jpeg'
];

let currentIndex = 0;

function showImage(index) {
    const imageElement = document.getElementById('imageu');
    imageElement.src = images[index];
}

document.getElementById('prevButton').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

document.getElementById('nextButton').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});
