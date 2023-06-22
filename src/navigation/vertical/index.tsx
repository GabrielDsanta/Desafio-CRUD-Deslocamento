export default function navigation() {
  return [
    {
      title: 'Condutor',
      icon: 'mdi:card-account-details-star',
      children: [
        {
          title: 'Listar',
          icon: 'mdi:format-list-bulleted',
          path: '/driver/list'
        },
        {
          title: 'Criar',

          icon: 'mdi:plus-box',
          path: '/driver/create'
        },
      ]
    },
    {
      title: 'Clientes',
      icon: 'mdi:user',
      children: [
        {
          title: 'Listar',
          icon: 'mdi:format-list-bulleted',
          path: '/clients/list'
        },
        {
          title: 'Criar',
          icon: 'mdi:plus-box',
          path: '/clients/create'
        },
      ]
    },
    {
      title: 'Deslocamento',
      icon: 'mdi:car-arrow-right',
      children: [
        {
          title: 'Listar',
          icon: 'mdi:format-list-bulleted',
          path: '/sprain/list'
        },
        {
          title: 'Criar',

          icon: 'mdi:plus-box',
          path: '/sprain/create'
        },
      ]
    },
    {
      title: 'Veiculo',
      icon:'mdi:car-back',
      children: [
        {
          title: 'Listar',
          icon: 'mdi:format-list-bulleted',
          path: '/vehicle/list'
        },
        {
          title: 'Criar',
          icon: 'mdi:plus-box',
          path: '/vehicle/create'
        },
      ]
    }
  ]
}

