import { createReducer } from 'redux-create-reducer'
import * as ActionsTypes from '../actions/menuActionsTypes'

const initialState = {
  pizza: [
    { img: 'https://www.receitas-sem-fronteiras.com/media/receitapizzamussarela-jpg_crop.jpeg/rh/receita-de-pizza-de-mussarela.jpg', flavor: 'mussarela', sizes: ['pequena', 'média', 'grande'], prices: [1000, 2500, 3500] },
    { img: 'https://t1.rg.ltmcdn.com/pt/images/9/8/3/img_pizza_calabresa_e_mussarela_4389_paso_2_600.jpg', flavor: 'calabresa', sizes: ['pequena', 'média', 'grande'], prices: [1000, 2500, 3500] },
    { img: 'https://www.pizzatec.com.br/assets/uploads/gallery/images/2018/08/curiosidades-pizza-portuguesa-1533563027.jpeg', flavor: 'portuguesa', sizes: ['pequena', 'média', 'grande'], prices: [1500, 3000, 4500] },
    { img: 'https://img.itdg.com.br/tdg/images/recipes/000/169/517/146316/146316_original.jpg?mode=crop&width=710&height=400', flavor: 'frango', sizes: ['pequena', 'média', 'grande'], prices: [1000, 2500, 3500] }
  ],
  sandwich: [
    { img: 'https://www.dicasdemulher.com.br/wp-content/uploads/2016/10/sanduiche-natural-2.jpg', flavor: 'peito de peru', sizes: ['meio', 'inteiro'], prices: [600, 1050] },
    { img: 'https://www.dicasdemulher.com.br/wp-content/uploads/2016/10/sanduiche-natural-1.jpg', flavor: 'frango', sizes: ['meio', 'inteiro'], prices: [500, 900] },
    { img: 'http://www.donadeola.com.br/src/img/produtos/produto__Sanduiche_metro_n_7.jpg', flavor: 'carne', sizes: ['meio', 'inteiro'], prices: [500, 900] },
    { img: 'https://www.dicasdemulher.com.br/wp-content/uploads/2016/10/sanduiche-natural-3.jpg', flavor: 'atum', sizes: ['meio', 'inteiro'], prices: [550, 950] }
  ],
  soda: [
    { img: 'https://f.i.uol.com.br/fotografia/2018/08/21/15348230475b7b8a8778a2e_1534823047_3x2_lg.jpg', flavor: 'coca-cola', sizes: ['lata', '600ml', '2L'], prices: [500, 750, 900] },
    { img: 'https://www.coca-colaindia.com/content/dam/journey/in/en/private/Choices/related%20stories/India-sprite-fountain.jpg', flavor: 'sprite', sizes: ['lata', '600ml', '2L'], prices: [350, 600, 800] },
    { img: 'https://www.underconsideration.com/brandnew/archives/fanta_2017_00.jpg', flavor: 'fanta laranja', sizes: ['lata', '600ml', '2L'], prices: [350, 600, 800] },
    { img: 'https://extra.globo.com/incoming/16801975-303-43a/w640h360-PROP/kuat.jpg', flavor: 'kuat', sizes: ['lata', '600ml', '2L'], prices: [350, 600, 800] }
  ],
  iceCream: [
    { img: 'https://www.receitadevovo.com.br/gbau/sistema/receitas/img/sorvete-de-morango.jpg', flavor: 'morango', sizes: ['1 bola', '2 bolas', '3 bolas'], prices: [250, 400, 550] },
    { img: 'https://blog.novasafra.com.br/wp-content/uploads/2018/02/113-750x450.jpg', flavor: 'chocolate', sizes: ['1 bola', '2 bolas', '3 bolas'], prices: [250, 400, 550] },
    { img: 'https://www.comidaereceitas.com.br/wp-content/uploads/2007/09/sorvete_cremoso_baunilha.jpg', flavor: 'baunilha', sizes: ['1 bola', '2 bolas', '3 bolas'], prices: [250, 400, 550] },
    { img: 'https://www.comidaereceitas.com.br/wp-content/uploads/2009/11/sorvete_coco_facil.jpg', flavor: 'coco', sizes: ['1 bola', '2 bolas', '3 bolas'], prices: [250, 400, 550] }
  ]
}

const menuReducer = createReducer(
  initialState,
  {
    [ActionsTypes.INSERT_MENU]: (_,action) => {
      return action.menu
    },
    [ActionsTypes.DELETE_MENU]: () => {
      return {
        pizza: [],
        sandwich: [],
        soda: [],
        iceCream: []
      }
    }
  }
)

export default menuReducer