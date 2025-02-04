document.querySelector('.contact').addEventListener('click', function() {
  const contactDesc = document.querySelector('.contact-desc');
  contactDesc.style.display = contactDesc.style.display === 'none' || contactDesc.style.display === '' ? 'block' : 'none';
});

document.querySelectorAll('.tap a').forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault(); 
    if (button.classList.contains('list-mode')) {
      document.querySelector('.myproject').style.display = 'block';
      document.querySelector('.details').style.display = 'none';
    } else if (button.classList.contains('details-mode')) {
      document.querySelector('.myproject').style.display = 'none';
      document.querySelector('.details').style.display = 'block';
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let currentState = 0; 
  let count = 4;
  const countElement = document.getElementById("num");
  const countWrapper = document.getElementById("count");
  const introduceSection = document.querySelector(".introduce");
  const intro2Section = document.querySelector(".intro2");
  const introWrap = document.querySelector(".intro-wrap");
  const myproject = document.querySelector(".myproject");

  const counter = setInterval(timer, 1000);

  
  function timer() {
    count--;
    
    if (count <= 0) {
      clearInterval(counter);
      countWrapper.className = count;
      countElement.innerHTML = "";
      flashScreen();
      return;
    }

    countElement.innerHTML = count;
  }

  function flashScreen() {
    introWrap.classList.add("flash");
    introWrap.addEventListener("transitionend", function () {
      introWrap.style.display = "none";
      introduceSection.style.display = "block";
      introduceSection.classList.add("show");
      changeIntroduceContent(0);
    }, { once: true });
  }

  function changeIntroduceContent(state) {
    const leftContent = document.querySelector('.introduce-left');
    const rightContent = document.querySelector('.introduce-right');
    const introduceTop = document.querySelector('.introduce-top');
    const introduceBottom = document.querySelector('.introduce-bottom');
    
    leftContent.classList.remove('animate');
    
    switch (state) {
      case 0:
        introduceTop.innerHTML = ' <div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div>'
        introduceBottom.innerHTML = '   <div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div>'
        leftContent.innerHTML = '<img src="images/test01.png" alt="">'; 
        rightContent.innerHTML = '<p class="who">WHO AM I</p><p class="iam">저는</p><span class="textchange">카멜레온 같은 <br> 사람입니다.</span><div class="page"><em>1</em><span class="num">ST</span><span class="slash">/</span>4</div>';
        break;
      case 1:
        introduceTop.innerHTML = ' <div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div>'
      introduceBottom.innerHTML = ' <div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div>'
      leftContent.innerHTML = '<img src="images/test01.png" alt="">';
      rightContent.innerHTML = '<p class="who">WHO AM I</p><p class="iam">저는</p><span class="textchange1">상황에 따라 유연하게 변화를 <br> 수용하고 원활한 소통을 통해 <br> 다양한 사람들과 쉽게 친해져<br> 협업에 강점을 지니고 있습니다.</span><div class="page1"><em>2</em><span class="num">ND</span><span class="slash">/</span>4</div>';
        break;
      case 2:
        introduceTop.innerHTML = ' <div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div>'
        introduceBottom.innerHTML = ' <div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div><div class="whiterect"></div>'
        leftContent.innerHTML = '<img src="images/test01.png" alt="">'; 
        rightContent.innerHTML = '<p class="who">WHO AM I</p><p class="iam">저는</p><span class="textchange2">다양한 관점에서 문제를 분석하고<br>창의적인 해결책을 융합하여<br>혁신적인 접근 방식을<br> 제시하는 데 강점이 있습니다.</span><div class="page1"><em>3</em><span class="num">RD</span><span class="slash">/</span>4</div>';
        break;
      case 3:
        introduceTop.innerHTML = ' <div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div>'
      introduceBottom.innerHTML = ' <div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div><div class="blackrect"></div>'
      leftContent.innerHTML = '<img src="images/test01.png" alt="">'; 
      rightContent.innerHTML = '<p class="who">SKILL LIST</p><p class="iam"></p><span class="textchange3"><div class="skill"><img src="images/skill1.png" alt=""><img src="images/skill2.png" alt=""><img src="images/skill3.png" alt=""><img src="images/skill4.png" alt=""><img src="images/skill5.png" alt=""><img src="images/skill6.png" alt=""><img src="images/skill7.png" alt=""><img src="images/skill8.png" alt=""><img src="images/skill9.png" alt=""></div></span><div class="page1"><em>4</em><span class="num">TH</span><span class="slash">/</span>4</div>';
        break;
      default:
        console.warn("알 수 없는 상태:", state);
    }

    const img = leftContent.querySelector('img');
    img.onload = () => {
      leftContent.classList.add('animate');
    };
    img.onerror = () => {
      console.error("이미지 로드 실패:", img.src);
    };
  }

 // aboutme 클릭 시 .introduce로 이동 (a태그 기본 동작 막기)
document.querySelectorAll('.aboutme').forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();  // a태그의 기본 동작인 페이지 이동을 막음
    introWrap.style.display = "none";
    myproject.style.display = "none";
    intro2Section.style.display = "none";
    introduceSection.style.display = "block";  // .introduce로 이동
    introduceSection.classList.add("show");
  });
});

document.querySelector(".project").addEventListener("click", function (event) {
  event.preventDefault(); 
  introWrap.style.display = "none";
  introduceSection.style.display = "none";
  intro2Section.style.display = "none";
  myproject.style.display = "block";  
});


document.addEventListener('wheel', function(event) {
  const myproject = document.querySelector(".myproject");
  const details = document.querySelector(".details"); 


  if (myproject.style.display === "block" || details.style.display === "block") {
    return; 
  }

  if (event.deltaY > 0) {
    if (currentState === 3) {
      introduceSection.style.display = "none";
      intro2Section.style.display = "block";
      setTimeout(() => {
        intro2Section.classList.add("flash-black");
        setTimeout(() => {
          intro2Section.classList.remove("flash-black");
          intro2Section.style.display = "none";
          setTimeout(() => {
            myproject.style.display = "block";
          }, 500); 
        }, 1600); 
      }, 1500); 
    } else {
      currentState = (currentState + 1) % 4;
      changeIntroduceContent(currentState);
    }
  } else if (event.deltaY < 0) {
    if (intro2Section.style.display === "block") {
      intro2Section.style.display = "none";
      introduceSection.style.display = "block";
    } else {
      currentState = (currentState - 1 + 4) % 4;
      changeIntroduceContent(currentState);
    }
  }
});
  const kbo = document.querySelectorAll(".KBO");
const kbovideo = document.querySelector(".kbo-video");
const comingsoon = document.querySelectorAll(".comingsoon"); 
const comingsoonVideos = document.querySelectorAll(".comingsoon-video"); 
const kimhae = document.querySelector('.kimhae')
const kimhaevideo = document.querySelector('.kimhae-video')
const shoppe = document.querySelector('.shoppe')
const shoppevideo = document.querySelector('.shoppe-video')

kbo.forEach(video => {
  video.addEventListener("mouseenter", function () {
    kbovideo.style.display = "block";
    kbovideo.play();
  });

  video.addEventListener("mouseleave", function () {
    kbovideo.style.display = "none";
    kbovideo.pause();
    kbovideo.currentTime = 0;
  });
});

comingsoon.forEach((coming, index) => {
  coming.addEventListener("mouseenter", function () {
    if (comingsoonVideos[index]) {
      comingsoonVideos[index].style.display = "block";
      comingsoonVideos[index].play();
    }
  });

  coming.addEventListener("mouseleave", function () {
    if (comingsoonVideos[index]) {
      comingsoonVideos[index].style.display = "none";
      comingsoonVideos[index].pause();
      comingsoonVideos[index].currentTime = 0;
    }
  });
});
kimhae.addEventListener('mouseenter', function() {
  kimhaevideo.style.display = 'block';  
  kimhaevideo.play();
});

kimhae.addEventListener('mouseleave', function() {
  kimhaevideo.style.display = 'none';  
  kimhaevideo.pause();
  kimhaevideo.currentTime = 0;
});
shoppe.addEventListener('mouseenter', function() {
  shoppevideo.style.display = 'block';  
  shoppevideo.play();
});

shoppe.addEventListener('mouseleave', function() {
  shoppevideo.style.display = 'none';  
  shoppevideo.pause();
  shoppevideo.currentTime = 0;
});
});



