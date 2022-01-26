import React, { Component } from 'react'
import Title from './Title'
import { FiCoffee, FiWind, FiAnchor, FiWifi } from 'react-icons/fi'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FiCoffee />,
        title: 'Free Coffee',
        info: 'lorem ipsum dolor sit amet, consectetur adip',
      },
      {
        icon: <FiWind />,
        title: 'Surfboarding',
        info: 'lorem ipsum dolor sit amet, consectetur adip',
      },
      {
        icon: <FiAnchor />,
        title: 'Yacht',
        info: 'lorem ipsum dolor sit amet, consectetur adip',
      },
      {
        icon: <FiWifi />,
        title: 'Free WiFi',
        info: 'lorem ipsum dolor sit amet, consectetur adip',
      },
    ],
  }
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
