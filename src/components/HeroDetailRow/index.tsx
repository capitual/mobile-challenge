import React from 'react';
import { HeroDetailRowProps } from '../../@types';
import { Text } from '../Text';
import { DetailTextWrapper, Row } from './styles';
import { Colors, Typography } from '../../config';

export function HeroDetailRow({ detail, title }: HeroDetailRowProps) {
  return (
    <Row>
      <DetailTextWrapper width="35%">
        <Text
          fontSize={14}
          fontFamily={Typography.INTER_MEDIUM}
          color={Colors.GRAY}
          lineHeight={18}
        >
          {title}
        </Text>
      </DetailTextWrapper>

      <DetailTextWrapper width="65%">
        <Text
          fontSize={14}
          fontFamily={Typography.INTER_MEDIUM}
          lineHeight={18}
        >
          {detail}
        </Text>
      </DetailTextWrapper>
    </Row>
  );
}
