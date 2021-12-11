import {useState} from "react";

export const useFetching = (callback) => { // Callback - запрос, перед которым крутилку надо будет показать
    const [isLoading, setIsLoading] = useState(false); // Состояние, отвечающее за крутилку
    const [error, setError] = useState(''); // Обработка ошибки

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback(); // В случае успеха выполняем колбэк
        } catch (e) {
            setError(e.message); // В случае неудачи показываем ошибку
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}