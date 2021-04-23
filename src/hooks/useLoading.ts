import { useCallback, useState } from 'react';

type UseLoadingType = { isLoading: boolean; enableLoading: () => void; disableLoading: () => void };

export function useLoading(): UseLoadingType {
    const [isLoading, setIsLoading] = useState(false);

    const enableLoading = useCallback((): void => {
        setIsLoading(true);
    }, [setIsLoading]);

    const disableLoading = useCallback((): void => {
        setIsLoading(false);
    }, [setIsLoading]);

    return { isLoading, enableLoading, disableLoading };
}
