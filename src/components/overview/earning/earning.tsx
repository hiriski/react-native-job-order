import React, { FC, ReactElement, ReactNode } from 'react';
import { View, Typography, MaterialIcon } from '@components/ui';
import { StyleSheet } from 'react-native';
import { createSpacing } from '@utils/theme';
import useTheme from '@hooks/use-theme';
import { shape } from '@config/theme/base';

interface CardProps {
  title: string;
  value: string;
  icon: ReactElement;
  footerText?: string;
}

const CardContent: FC<CardProps> = (props: CardProps) => {
  const { title, value, icon, footerText } = props;
  return (
    <View style={{ flexGrow: 1, flex: 1 }}>
      <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <View>
          <Typography variant="body">{title}</Typography>
          <Typography variant="h3">{value}</Typography>
        </View>
        <View>{icon}</View>
      </View>
      <View>
        <Typography variant="subtitle">{footerText}</Typography>
      </View>
    </View>
  );
};

const OverviewEarning = () => {
  const { palette } = useTheme();
  return (
    <View style={styles.root}>
      <View style={StyleSheet.flatten([styles.container, { backgroundColor: palette.background.paper }])}>
        <View style={styles.grid}>
          <CardContent
            title="Today Earning"
            value="Rp 525.000,-"
            icon={<MaterialIcon name="arrow-forward" size={32} />}
            footerText="Lorem ipsum dolor..."
          />
          <CardContent
            title="Today Earning"
            value="Rp 525.000,-"
            icon={<MaterialIcon name="arrow-forward" size={32} />}
            footerText="Lorem ipsum dolor..."
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: createSpacing(4),
    marginTop: createSpacing(4),
  },
  container: {
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
    borderRadius: shape.borderRadius,
  },
  grid: {
    width: '50%',
    flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
});

export default OverviewEarning;
