import { createStore, combineReducers, applyMiddleware } from "redux";
import { Dishes } from "./dishes";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import { Comments } from "./comments";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			dishes: Dishes,
			promotions: Promotions,
			leaders: Leaders,
			comments: Comments,
		}),
		applyMiddleware(thunk, logger)
	);

	return store;
};
