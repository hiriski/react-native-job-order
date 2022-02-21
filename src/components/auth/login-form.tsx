import React, { FC } from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Button, MaterialTextField, Text } from '@components/ui';
import { useDispatch } from 'react-redux';
import { loginRequest } from '@store/auth/actions';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginModel } from '@app/interfaces/auth';

type Inputs = LoginModel;

const imageIcon = '../../assets/icons/icon-invoices.png';
const defaultValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().required('Email tidak boleh kosong'),
  password: yup.string().required('Password tidak boleh kosong'),
});

const LoginForm: FC = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (values) => {
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
      <Button size="large" title="SIGN IN" onPress={handleSubmit(onSubmit)} />
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
