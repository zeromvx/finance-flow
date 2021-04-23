import { useContext } from 'react';
import { Store } from '../index';

export function useStore() {
    return useContext(Store);
}
