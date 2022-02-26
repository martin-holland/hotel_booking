# Hotel Booking App

A simple rendering application for a hotel booking system. Some more advanced rendering techniques used here which are explained in the learning outcomes later.

## Technologies Used:

- React
- HTML
- CSS
- Contentful
- React-router-dom
- React-icons
- Styled components
- Netlify
- React Context

## Setup and usage

Live page [here](https://hotel-booking-mh.netlify.app/)

## Learnings and Useful Features:

### Main Learnings

- [x] Creating the context was relatively easy and allowed the use of a state management outside of the class components to be reused many times. Very advantageous compared to more traditional methods of requiring the context. This is akin to state management libraries such as redux.

- [x] By setting up a NavBar state like this:

  ```js
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  ```

  It enabled the use of the conditional rendering to either show or hide the navbar with a CSS property.

- [x] Deep customisation through this project is attainable due to the reuse of many components, the Title component is a perfect example demonstrating a super basic return of HTML but utilising JSX to change it to however you want it to display. This reuses the CSS and HTML multiple times through the project and keeps everything consistently styled without the need for additional CSS styling

- [x] React-router-dom - Future projects will benefit from setting up of the react-router-dom before the project gets too heavy. This was something I set up very early in this project and it paid off much quicker in the long term as I was able to use the slugs to access specific room pages.
- [x] Destructuring throughout this project enabled more readable code and easier to follow data passing. Most of this is done inside the context.js It ultimately takes a complicated data return from contentful and destructures it into easier to read fields and sets the state accordingly.
- [x] Using a default image setup in components that require images to be displayed can help prevent embarrasment later. It looks much more professional and matches internet standards for preventing missing images.
- [x] By wrapping the project with the context provider (inside context.js), in this case RoomProvider, it allows the forwarding of functions to be used by later components or pages.

  ```js
  <RoomContext.Provider
    value={{
      ...this.state,
      getRoom: this.getRoom,
      handleChange: this.handleChange,
    }}
  >
    {this.props.children}
  </RoomContext.Provider>
  ```

- [x] Styled components utilisation makes customisation of the component super easy through CSS. Styled hero is a great example of this where most of the code is demonstrated as a template literal string allowing the complete customisation through Javascript of imports including images. Often a barrier with standard CSS. A default image was used here also to catch image errors.

- [x] Utilisation of higher order function within context.js allows wrapping to pass values through easily.

```js
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
```

- [x] Setting ranges of max and minimum data to reflect that of the actual data is invaluable. This prevents the need for hardcoded minimums and maximums. Continue to be wary over using this approach for user entered data unless validation is provided.

- [x] Declaring a range to be the maximum initially means that components will return all results rather than none or one if minimum is selected.
- [x] RoomsFilter.js demonstrates the use of a Hook with the context here:

```js
function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
```

- [x] Set - is a class which can be used to store only unique values. Extremely beneficial when working with select boxes where you only wish unique entries of data to be displayed from a potentially very large range.

```js
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
```

- [x] RoomsFilter alongside context uses advanced filtering to display room data effectively. Including parsing of data to ensure the comparisons remain validated.

- [x] Using react-dev-tools inside Chrome was especially useful here to visualise the data being passed from context into all of the various components, it was especially useful for debugging to find if data types were being cast correctly.

### Contentful

- [x] Integration with contentful allows for the creation and hosting of data in a GUI. Exceptionally useful for the future management of the data as it requires a less technical background to operate and update. This potentially gives clients the ability to manage a project themselves once set up.

- [x] .env file setup super important here, to ensure that the access token remains hidden from the outside world.

- [x] Using Contenful's API call is very useful to order the data that is stored. This can be used to return the data in any order you require and is extremely customisable by going inside your customised fields within contentful.

### Points to Note:

- This project could easily be reused for a real estate type webpage.

## Sources

- John Smilga for his amazing tutorial http://github.com/john-smilga

## Authors and Acknowledgements:

- GitHub @martin-holland
- [LinkedIn](https://www.linkedin.com/in/martin-holland-5099071b9/)
