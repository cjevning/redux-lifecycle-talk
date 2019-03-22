// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Image,
  CodePane,
} from 'spectacle';

import home from './img/home.png';
import gollum from './img/Gollum-Ring.jpg';
import hammer from './img/touch.jpg';
import wild from './img/wild.jpg';
import reduce from './img/reduce.gif';
import plug from './img/plug.jpg';
import benders from './img/benders.jpg';
import bleach from './img/bleach.gif';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#f72e4e',
    secondary: '#7cd8f9',
    tertiary: '#a2f280',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Redux Lifecycle
          </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            The Problem?
          </Heading>
          <Appear>
            <Heading size={3} textColor="primary">
              State Management
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={home} alt="chegg home"></Image>
        </Slide>
        <Slide>
          <Heading size={3} textColor="white">
            One Source of Truth to Rule Them All
          </Heading>
          <Image src={gollum} alt="gollum redux"></Image>
        </Slide>
        <Slide bgColor="secondary">
            <Heading size={2} textColor="white">
              1. Store
            </Heading>
            <Heading size={2} textColor="white">
              2. Actions
            </Heading>
            <Heading size={2} textColor="white">
              3. Reducers
            </Heading>
        </Slide>
        <Slide bgColor="secondary">
            <Heading size={2} textColor="primary">
              1. Store
            </Heading>
            <Heading size={2} textColor="white">
              2. Actions
            </Heading>
            <Heading size={2} textColor="white">
              3. Reducers
            </Heading>
        </Slide>
        <Slide bgColor="primary" transition={['zoom']}>
          <CodePane height={100} textSize="30px" language="javascript" source={`
            {
              user: 'Conner Jevning',
              books: [...],
              itemsInCart: 21
            }
          `}/>
          <Appear>
            <Image height={200} src={hammer} alt="can't touch this"></Image>
          </Appear>
        </Slide>
        <Slide bgColor="tertiary">
            <Heading size={2} textColor="black">
              Immutability in JS
            </Heading>
            <Appear>
              <div>
                <CodePane textSize="25px" language="javascript" source={`
  var statement = "I am an immutable value";
  var otherStr = statement.slice(8, 17);
  console.log(statement); // "I am an immutable value"
                `}/>
              </div>
            </Appear>
        </Slide>
        <Slide bgColor="tertiary">
            <Heading size={2} textColor="black">
              Immutability in JS
            </Heading>
            <CodePane textSize="25px" language="javascript" source={`
  var arr = [];
  var v2 = arr.push(2);
  console.log(v2); // 1
  console.log(arr); // [2]
              `}/>
        </Slide>
        <Slide bgColor="tertiary">
            <Heading size={2} textColor="black">
              Immutability in JS
            </Heading>
              <CodePane textSize="25px" language="javascript" source={`
  var obj = { myKey: 1, otherKey: 2 };
  obj.thirdKey = 3;
  obj.otherKey = 'what';
  delete obj.myKey;
  console.log(obj); // { otherKey: 'what', thirdKey: 3 }
              `}/>
              <Image src={wild} alt="wild wild west"></Image>
        </Slide>
        <Slide bgColor="tertiary">
            <Heading size={2} textColor="black">
              Immutability in JS
            </Heading>
              <CodePane textSize="25px" language="javascript" source={`
  var obj = Immutable.fromJS({
    myKey: 1,
    otherKey: 2
  });

  obj.myKey = 'what';
  console.log(obj); // { myKey: 1, otherKey: 2 }

  obj.set(otherKey, 'what');
  console.log(obj); // { myKey: 1, otherKey: 'what' }

              `}/>
        </Slide>
        <Slide bgColor="secondary">
            <Heading size={2} textColor="white">
              1. Store
            </Heading>
            <Heading size={2} textColor="primary">
              2. Actions
            </Heading>
            <Heading size={2} textColor="white">
              3. Reducers
            </Heading>
        </Slide>
        <Slide transition={['zoom']}>
            <Heading size={2} textColor="white">
              Actions ~= Events
            </Heading>
          <CodePane textSize="25px" language="javascript" source={`
  // Subscribe to (or "observe") event.
  $('#foo').bind('click', function() {
      alert("Click!");
  });

  // Emit event.
  $('#foo').trigger('click');
          `}/>
        </Slide>
        <Slide transition={['zoom']}>
            <Heading size={2} textColor="white">
              Actions ~= Events
            </Heading>
          <CodePane padding="10px" textSize="25px" language="javascript" source={`
  import reduxStore from '../redux/store';
  console.log(reduxStore); // { itemsInCart: 21 }

  const addToCartAction = (cartData) => reduxStore.dispatch({ type: ADD_CART_ITEM, data: cartData });
          `}/>
          <CodePane padding="10px" textSize="25px" language="javascript" source={`
  import { addToCartAction } from '../redux/actions;

  <button onClick={() => addToCartAction(cartData)} />
          `}/>
          <CodePane padding="10px" textSize="25px" language="javascript" source={`
  console.log(reduxStore); // { itemsInCart: 22 }
          `}/>
        </Slide>
        <Slide bgColor="secondary">
            <Heading size={2} textColor="white">
              1. Store
            </Heading>
            <Heading size={2} textColor="white">
              2. Actions
            </Heading>
            <Heading size={2} textColor="primary">
              3. Reducers
            </Heading>
        </Slide>
        <Slide bgColor="tertiary" transition={['zoom']}>
            <Heading size={2} textColor="white">
              Reducers ~= Array.Reduce
            </Heading>
        </Slide>
        <Slide bgColor="tertiary">
            <Heading size={2} textColor="white">
              Reducers ~= Array.Reduce
            </Heading>
          <CodePane textSize="25px" language="javascript" source={`
  const arr = [3, 5, 1, 4, 2];

  const total = arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
          `}/>
        </Slide>
        <Slide bgColor="tertiary">
            <Heading size={2} textColor="white">
              Reducers ~= Array.Reduce
            </Heading>
          <Image height={200} src={reduce} alt="reduce visualization"></Image>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="white">
            Reducers Reduce the Store State
          </Heading>
          <CodePane textSize="20px" language="javascript" source={`
  const initialState = { itemsInCart: 23, cart : [0...22]};

  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_CART_ITEM:
        return {
          ...state,
          itemsInCart: state.itemsInCart + 1,
          cart: [...state.cart, action.data]
        }
      default:
        return state
    }
  }
          `}/>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="white">
            Reducers Reduce the Store State
          </Heading>
          <CodePane textSize="20px" language="javascript" source={`
  const initialState = { itemsInCart: 23, cart : [0...22], subtotal: 0 };

  function cartReducer(state = initialState, action) {
    switch (action.type) {
        case REMOVE_CART_ITEM:
          return {
            ...state,
            itemsInCart: state.itemsInCart - 1,
            cart: [...state.cart].splice(action.cartIndex, 1),
            subtotal: state.subtotal - state.cart[action.cartIndex].price
          }
      default:
        return state
    }
  }
          `}/>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="white">
            Reducers Reduce the Store State
          </Heading>
          <CodePane textSize="20px" language="javascript" source={`
  const initialState = { itemsInCart: 23, cart : [0...22], subtotal: 0 };

  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case SORT_CART:
        return {
          ...state,
          cart: [...state.cart].sort(action.sortingFn)
        }
      default:
        return state
    }
  }
          `}/>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} textColor="white">
            Reducers Are <span style={{ fontStyle: 'italic' }}>Usually</span> Specialized
          </Heading>
          <CodePane height={200} textSize="16px" language="javascript" source={`
  const initialState = { user: null };

  function userReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_USER:
        return {
          ...state,
          user: action.user
        }
      case LOGOUT_USER:
        return {
          ...state,
          user: null
        }
      default:
        return state
    }
  }
          `}/>
          <Appear>
            <Image height={200} src={plug} alt="plug in"></Image>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} textColor="white">
            Reducers Are <span style={{ fontStyle: 'italic' }}>Usually</span> Specialized
          </Heading>
          <CodePane height={200} textSize="14px" language="javascript" source={`
  const initialState = { itemsInCart: 23, cart : [0...22], subtotal: 0, user: null, userSubscriptions: [] };

  function megaReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_USER:
        return {
          ...state,
          user: action.user
        }
      case ADD_CART_ITEM:
        return {
          ...state,
          itemsInCart: state.itemsInCart + 1,
          cart: [...state.cart, action.data]
        }
      case SUBSCRIBE:
        return {
          ...state,
          userSubs: action.subscription
        }
      case LOGOUT_USER:
        return {
          ...state,
          user: null
        }
      case REMOVE_CART_ITEM:
        return {
          ...state,
          itemsInCart: state.itemsInCart - 1,
          cart: [...state.cart].splice(action.cartIndex, 1),
          subtotal: state.subtotal - state.cart[action.cartIndex].price
        }
      case SORT_CART:
        return {
          ...state,
          cart: [...state.cart].sort(action.sortingFn)
        }
      default:
        return state
    }
  }
          `}/>
          <Appear>
            <Image height={200} src={bleach} alt="eye bleach"></Image>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} textColor="white">
            Reducers Are <span style={{ fontStyle: 'italic' }}>Usually</span> Specialized
          </Heading>
          <CodePane height={200} textSize="14px" language="javascript" source={`
  const initialState = { booksOwned: 23 };

  function booksReducer(state = initialState, action) {
    switch (action.type) {
      case PURCHASE_BOOK:
        return {
          ...state,
          booksOwned: state.booksOwned + 1,
        }
      case LOGOUT_USER:
        return {
          ...state,
          booksOwned: 0,
        }
      default:
        return state
    }
  }
          `}/>
          <Appear>
            <Image height={200} src={benders} alt="multipurpose benders"></Image>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Recap
          </Heading>
          <Heading size={3} textColor="white">
            1. Store
          </Heading>
          <Heading size={3} textColor="white">
            2. Actions
          </Heading>
          <Heading size={3} textColor="white">
            3. Reducers
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2} textColor="primary">
            1. Store
          </Heading>
          <List textColor="black">
            <ListItem>Contains all app state</ListItem>
            <ListItem>Immutable - requires specific methods to update</ListItem>
          </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2} textColor="primary">
            2. Actions
          </Heading>
          <List textColor="black">
            <ListItem>"Dispatched" so that the store can act on them</ListItem>
            <ListItem>Contain a `type` and whatever other data necessary to update</ListItem>
          </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2} textColor="primary">
            3. Reducers
          </Heading>
          <List textColor="black">
            <ListItem>Modify the state in response to actions</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            Advanced Topics
          </Heading>
          <List>
            <ListItem>Async Actions</ListItem>
            <ListItem>Middleware</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={2} textColor="black" caps>
            Questions?
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
            <Heading size={2} textColor="white">
              Acknowledgements & further reading
            </Heading>
            <List>
              <ListItem textSize="24px" style={{ margin: '10px' }}><a href="https://mobile.twitter.com/JoshWComeau/status/1070269586413633536?s=19">Original tweet source of talk idea</a></ListItem>
              <ListItem textSize="24px" style={{ margin: '10px' }}><a href="https://redux.js.org/introduction/getting-started">The incredible Redux docs</a></ListItem>
              <ListItem textSize="24px" style={{ margin: '10px' }}><a href="https://engineering.khanacademy.org/posts/lets-reduce.htm">Let's Reduce! A Gentle Introduction to Javascript's Reduce Method</a></ListItem>
              <ListItem textSize="24px" style={{ margin: '10px' }}><a href="https://codeburst.io/event-emitters-and-listeners-in-javascript-9cf0c639fd63">Event emitters and listeners in JavaScript</a></ListItem>
              <ListItem textSize="24px" style={{ margin: '10px' }}><a href="https://stackoverflow.com/questions/13438924/what-is-an-event-emitter">Stack Overflow, obviously</a></ListItem>
              <ListItem textSize="24px" style={{ margin: '10px' }}><a href="https://www.sitepoint.com/immutability-javascript/">Immutability in JavaScript</a></ListItem>
              <ListItem textSize="24px" style={{ margin: '10px' }}><a href="https://github.com/FormidableLabs/spectacle">The wonderful library this presentation was built in, Spectacle</a></ListItem>
            </List>
            
        </Slide>
      </Deck>
    );
  }
}
