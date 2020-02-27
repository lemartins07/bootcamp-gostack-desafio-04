import React, { Component } from 'react';

import Post from '../Post';

import './styles.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          author: {
            name: 'Leandro Martins',
            avatar: 'https://scontent.fpoa27-1.fna.fbcdn.net/v/t1.0-9/p960x960/43171577_1980305458692158_1299604434585649152_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=jsBMJ-wx5zEAX-k-Ak5&_nc_ht=scontent.fpoa27-1.fna&_nc_tp=6&oh=7a57cc00250e2666e6869a84116af331&oe=5EB6A4E8',
          },          
          date: '26 Fev 2020',
          content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',          
          comments: [
            {              
              id: 1,
              author: {
                avatar: "https://scontent.fpoa13-1.fna.fbcdn.net/v/t1.0-9/16003272_1495674937127264_6602989485012447672_n.jpg?_nc_cat=101&_nc_ohc=mrBfk-GfjwsAX8RZ3yY&_nc_ht=scontent.fpoa13-1.fna&oh=dfe432d6177ad4b60058685e294ba192&oe=5EC2DBE7",
                name: 'Bruno Ramires',
              },              
              content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
            },
            {
              id: 2,
              author: {
                avatar : 'https://scontent.fpoa13-1.fna.fbcdn.net/v/t31.0-8/p960x960/25532134_10210155593707067_4827011584588727711_o.jpg?_nc_cat=110&_nc_ohc=Hvb_GQ6AtSoAX_Mo1GX&_nc_ht=scontent.fpoa13-1.fna&_nc_tp=6&oh=992ad157771b36cbf57622bca76bb23e&oe=5EB4EAD0',
                name: 'Lucas Alek',
              },              
              content: 'Oieee'             
            }
          ]
        }
      ]
    }
  }
 
  render() {
    return (
      <main>        
          {this.state.posts.map(post => <Post key={post.id} data={post} />)}        
      </main>
    );
  }
}
