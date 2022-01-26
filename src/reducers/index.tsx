import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

export function enthusiasm(state: StoreState | undefined, action: EnthusiasmAction): StoreState {
  if (!state) {
    return {
      languageName: 'TypeScript',
      enthusiasmLevel: 1
    };
  } else {
    switch (action.type) {
      case INCREMENT_ENTHUSIASM:
        return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
      case DECREMENT_ENTHUSIASM:
        return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    }
  }
}