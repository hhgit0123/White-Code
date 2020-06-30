const initialState = {
  newsList: [],
};
export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    case "saveNews":
      let { title, description, image, edited, index } = action.payload;
      let news = { title, description, image, edited };
      if (index !== undefined) {
        let arr = [...state.newsList];
        arr.splice(index, 1, news);
        return { newsList: arr };
      } else {
        return { newsList: state.newsList.concat(news) };
      }
    case "deleteNews":
      return {
        newsList: state.newsList.filter(
          (item, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
}
