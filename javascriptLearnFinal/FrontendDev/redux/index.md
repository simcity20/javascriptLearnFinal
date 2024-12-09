Redux শেখার জন্য একটি JavaScript প্রোগ্রামার হিসেবে আপনাকে কয়েকটি গুরুত্বপূর্ণ
বিষয় শিখতে হবে। Redux হলো একটি স্টেট ম্যানেজমেন্ট লাইব্রেরি যা React-এর সঙ্গে
সবচেয়ে বেশি ব্যবহৃত হয়। Redux শিখতে হলে নিচের ধাপগুলো অনুসরণ করুন:

---

### ১. **Redux-এর মুল ধারণা বোঝা:**

- **State:** অ্যাপ্লিকেশনের একটি কেন্দ্রিয় ডেটা যা কম্পোনেন্টগুলোর মধ্যে শেয়ার
  করা হয়।
- **Actions:** এটি একটি প্লেইন জাভাস্ক্রিপ্ট অবজেক্ট যা স্টেট পরিবর্তন করার জন্য
  ব্যবহৃত হয়।
- **Reducers:** ফাংশন যা পুরানো স্টেট এবং অ্যাকশন ব্যবহার করে নতুন স্টেট তৈরি
  করে।
- **Store:** Redux স্টেট সংরক্ষণ করার জন্য একটি জায়গা।

---

### ২. **Redux লাইব্রেরি ইনস্টল করা:**

React অ্যাপ্লিকেশনে Redux ব্যবহার করতে হলে আপনাকে Redux এবং React-Redux ইনস্টল
করতে হবে:

```bash
npm install redux react-redux
```

---

### ৩. **Redux Workflow শিখুন:**

Redux ওয়ার্কফ্লো খুব সিম্পল কিন্তু খুব শক্তিশালী। এটি তিনটি প্রধান ধাপে কাজ
করে:

1.  অ্যাকশন তৈরি করা।
2.  রিডিউসার তৈরি করা।
3.  স্টোর কনফিগার করা।

**উদাহরণ কোড:**

```javascript
import { createStore } from 'redux';

// Initial State
const initialState = { count: 0 };

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Action Dispatching
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // { count: 1 }
```

---

### ৪. **Middleware শিখুন (যেমন Redux Thunk বা Redux Saga):**

Middleware ব্যবহার করে আপনি অ্যাসিনক্রোনাস কাজ (যেমন API কল করা) সহজে করতে
পারবেন। Redux Thunk সবচেয়ে বেশি ব্যবহৃত হয়:

```bash
npm install redux-thunk
```

---

### ৫. **React-এর সঙ্গে Redux ব্যবহার শিখুন:**

React-Redux এর `Provider` এবং `useSelector`, `useDispatch` হুক ব্যবহার করে React
এবং Redux একসাথে কাজ করে।

```javascript
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
};

// Render with Provider
import { createStore } from 'redux';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

---

### ৬. **অ্যাডভান্সড Redux কনসেপ্ট শিখুন:**

- Redux Toolkit ব্যবহার করা (এটি Redux-এর একটি সহজ এবং শক্তিশালী সংস্করণ)।
- Immutability নিশ্চিত করা (Immer.js ইত্যাদি)।
- Redux DevTools ব্যবহার করে ডিবাগ করা।

---

### ৭. **প্র্যাকটিস এবং প্রোজেক্ট তৈরি করা:**

Redux শেখার পর এটি প্র্যাকটিস করুন। ছোট ছোট প্রোজেক্ট তৈরি করুন, যেমন:

- একটি টু-ডু অ্যাপ।
- একটি কাউন্টার অ্যাপ।
- একটি API ফেচিং অ্যাপ (যেখানে Thunk/Saga ব্যবহার করবেন)।

---

Redux খুব জনপ্রিয় হলেও, Redux Toolkit এখনকার ট্রেন্ড এবং সহজবোধ্য। তাই Redux
Toolkit ব্যবহার শিখতে বিশেষ নজর দিন।
