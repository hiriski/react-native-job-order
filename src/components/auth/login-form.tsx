import React, { FC } from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Button, MaterialTextField, Text } from '@components/ui';
import { useDispatch } from 'react-redux';
import { loginRequest } from '@store/auth/actions';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
// import { joiResolver } from '@hookform/resolvers/joi';
// import Joi from 'react-native-joi';
import { LoginModel } from '@app/interfaces/auth';
import { useAppSelector } from '@app/store/hook';

type Inputs = LoginModel;

const imageIcon = '../../assets/icons/icon-invoices.png';
const defaultValues = {
  email: '',
  password: 'password',
};

// const schema = Joi.object({
//   email: Joi.string().required(),
//   password: Joi.string().required(),
// });

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const { loginLoading } = useAppSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    // resolver: joiResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    console.log('submited values', values);
    dispatch(loginRequest(values));
  };

  return (
    <ScrollView style={styles.root} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <View style={styles.iconContainer}>
        <Image source={require(imageIcon)} style={styles.icon} />
        <Text variant="h4">Job Order</Text>
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
      <Button size="large" title="SIGN IN" onPress={handleSubmit(onSubmit)} loading={loginLoading} />
    </ScrollView>
  );
};

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: width > 420 ? 38 : 32,
  },
  iconContainer: {
    marginBottom: 34,
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: undefined,
    aspectRatio: 1,
  },
  inputContainer: {
    marginBottom: 14,
  },
});

export default LoginForm;
