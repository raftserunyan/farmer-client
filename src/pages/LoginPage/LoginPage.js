import React from 'react';
import { Formik } from 'formik';

import { Input, Button } from 'ui';
import logoPic from 'images/logo.png';
import * as S from './LoginPage.styles';
import { initialValues, validationSchema } from './LoginPage.config';

export const LoginPage = ({ login }) => {
  return (
    <S.LoginPageContainer>
      <S.Logo src={logoPic} />
      <S.PageTitle>Մուտք գործել համակարգ</S.PageTitle>
      <S.LoginForm>
        <Formik
          onSubmit={login}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleSubmit, setFieldValue }) => (
            <>
              <Input
                value={values.username}
                placeholder="Մուտքանուն"
                onChange={(val) => setFieldValue('username', val)}
                onEnter={handleSubmit}
                autoFocus
                error={touched.username && errors.username}
              />
              <Input
                type="password"
                placeholder="Գաղտնաբառ"
                value={values.password}
                onChange={(val) => setFieldValue('password', val)}
                onEnter={handleSubmit}
                error={touched.password && errors.password}
              />
              <Button onClick={handleSubmit}>Մուտք</Button>
            </>
          )}
        </Formik>
      </S.LoginForm>
    </S.LoginPageContainer>
  );
};
