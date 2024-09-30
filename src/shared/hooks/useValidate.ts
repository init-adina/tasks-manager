import { useCallback } from "react";
import {
  FieldPath,
  FieldValues,
  PathValue,
  RegisterOptions,
  Validate,
} from "react-hook-form";

export function useValidate<T extends FieldValues>() {
  const nameOptions = useCallback(<K extends FieldPath<T>>(): RegisterOptions<
    T,
    K
  > => {
    return {
      required: "Поле 'Имя' обязательно",
    };
  }, []);

  const lastNameOptions = useCallback(<
    K extends FieldPath<T>,
  >(): RegisterOptions<T, K> => {
    return {
      required: "Поле 'Фамилия' обязательно",
    };
  }, []);

  const emailOptions = useCallback(<K extends FieldPath<T>>(): RegisterOptions<
    T,
    K
  > => {
    return {
      required: "Поле 'Email' обязательно",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Неправильный Email адресс",
      },
    };
  }, []);

  const passwordOptions = useCallback(<
    K extends FieldPath<T>,
  >(): RegisterOptions<T, K> => {
    return {
      required: "Введите пароль",
      minLength: {
        value: 8,
        message: "Пароль должен содержать минимум 8 символов",
      },
    };
  }, []);

  const confirmationOptions = useCallback(
    <K extends FieldPath<T>>(
      compare: Validate<PathValue<T, K>, T>
    ): RegisterOptions<T, K> => {
      return {
        required: "Подтвердите пароль",
        minLength: {
          value: 8,
          message: "Пароль должен содержать минимум 8 символов",
        },
        validate: compare,
      };
    },
    []
  );

  const phoneOptions = useCallback(<K extends FieldPath<T>>(): RegisterOptions<
    T,
    K
  > => {
    return {
      required: "Введите номер телефона",
      minLength: {
        value: 11,
        message: "Номер телефона введён неверно",
      },
    };
  }, []);

  const addressOptions = useCallback(
    <K extends FieldPath<T>>(validate = true): RegisterOptions<T, K> => {
      return {
        required: validate ? "Введите адресс" : false,
      };
    },
    []
  );

  return {
    nameOptions,
    lastNameOptions,
    emailOptions,
    confirmationOptions,
    passwordOptions,
    phoneOptions,
    addressOptions,
  };
}
