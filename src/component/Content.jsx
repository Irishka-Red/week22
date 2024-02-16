import React from 'react'
import Card from "./Card";
function Content() {
    return (
      <React.Fragment>
        <Card 
        name="Бетмен" 
        universe="Вселенная: DC Comics" 
        alterego="Альтер эго: Брюс Уэйн" 
        occupation="Род деятельности: борец с преступностью, филантроп, миллиардер" 
        friends="Друзья: Робин, Бэтгерл"
        superpowers="Суперсилы: интеллект, обширные познания, знания боевых искусств, ловкость"
        imgLink="https://st5.depositphotos.com/7824466/63482/i/450/depositphotos_634829746-stock-photo-batman-superhero-character-comics-dressed.jpg"
        title="Бетмен"  />
        <Card 
        name="Супермен" 
        universe="Вселенная: DC Comics" 
        alterego="Альтер эго: Кларк Кент" 
        occupation="Род деятельности: борец за справедливость" 
        friends="Друзья: собака Крипто"
        superpowers="Суперсилы: непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух"
        imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZsste48CsfvdPg__ECOHbwgR-oipOYbhTfRYNfOs2A&s"
        title="Супермен"/>
        <Card 
        name="Железный человек" 
        universe="Marvel Comics" 
        alterego="Альтер эго: Тони Старк" 
        occupation="Род деятельности: гений, миллиардер, плейбой, филантроп" 
        friends="Друзья: Мстители"
        superpowers="Суперсилы: высокий уровень интеллекта, широкие познания науки и техники"
        imgLink="https://i.pinimg.com/originals/09/5c/13/095c1396ba844fe292e475264402cdc9.jpg"
        title="Железный человек" />
      </React.Fragment>
    );
  }
  export default Content;