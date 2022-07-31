import React, { FC } from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Button, MaterialTextField, Text } from '@/components/ui';
import { useDispatch } from 'react-redux';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useAppSelector } from '@/store/hook';
import { IRequestLogin } from '../auth.interface';
import { auth_actionLogin } from '@/modules/auth/redux/auth-actions';
import { iconInvoice } from '@/assets/icons';
// import { iconInvoice } from '@/assets/icons';

// import { joiResolver } from '@hookform/resolvers/joi';
// import Joi from 'react-native-joi';

const defaultValues = {
  email: '',
  password: 'password',
};

// const schema = Joi.object({
//   email: Joi.string().required(),
//   password: Joi.string().required(),
// });

export const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const { login_loading } = useAppSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    // resolver: joiResolver(schema),
  });

  const onSubmit: SubmitHandler<IRequestLogin> = (values) => {
    console.log('submited values', values);
    dispatch(auth_actionLogin(values));
  };

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 20, justifyContent: 'center' }}
      showsVerticalScrollIndicator={false}>
      <View style={styles.iconContainer}>
        <Image source={iconInvoice} style={styles.icon} />
      </View>
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <MaterialTextField
            value={value}
            onChangeText={(val) => onChange(val)}
            label="Email"
            variant="outlined"
            isError={Boolean(errors?.email?.message)}
            errorMessage={errors?.email?.message}
            containerStyle={styles.inputContainer}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange } }) => (
          <MaterialTextField
            value={value}
            onChangeText={(val) => onChange(val)}
            label="Password"
            variant="outlined"
            isError={Boolean(errors?.password?.message)}
            errorMessage={errors?.password?.message}
            containerStyle={styles.inputContainer}
            secureTextEntry={true}
          />
        )}
      />
      <Button size="large" title="LOGIN" onPress={handleSubmit(onSubmit)} loading={login_loading} />
    </ScrollView>
  );
};

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    paddingHorizontal: width > 420 ? 38 : 32,
  },
  iconContainer: {
    marginBottom: 34,
    alignItems: 'center',
  },
  icon: {
    width: 120,
    height: undefined,
    aspectRatio: 1,
  },
  inputContainer: {
    marginBottom: 14,
  },
});
