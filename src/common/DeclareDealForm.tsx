import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import { PLEASE_ENTER_VALID } from '../constants/Label';
import { verticalScale } from '../utils/Scale';
import { isAmount, notEmpty } from '../utils/Validations';
import CommonModal from './CommonModal';
import CustomInput from './CustomInput';
import { RootState } from '../redux/Store';

type Props = {
  loader: boolean;
  onRequestClose: () => void;
  onDeclareDealConfirm: () => void;
  amount: number,
  description: string,
}

const DeclareDealForm = (props: Props) => {

  const { onRequestClose, loader, onDeclareDealConfirm, amount:_amount, description: _description} = props;
  const [description, setDescription] = useState<string>(_description ?? '');
  const [amount, setAmonut] = useState<string>(_amount?.toString() ?? '');
  const [error, setError] = useState<boolean>(false);


  const onDeclareDeal = () => {

    if (notEmpty(description) && isAmount(amount)) {
      setError(false)
      onDeclareDealConfirm({ description, amount })
      return
    }
    setError(true)
    setTimeout(() => {
      setError(false)
    }, 5000)
  }


  return (
    <CommonModal
      title={"Declare done deal"}
      text={"Declare deal"}
      disabled={loader}
      loader={loader}
      onPressButton={onDeclareDeal}
      onPressCross={onRequestClose}
    >
      <>
        <ScrollView style={{ marginVertical: verticalScale(10) }}>
          <CustomInput
            label="Description"
            value={description}
            placeholder={"Enter Description"}
            onChangeText={text => setDescription(text)}
            height={140}
            textAlignVertical="top"
            multiline
            maxLength={300}
            validation={notEmpty}
            error={error}
            errorMsg={`${PLEASE_ENTER_VALID}Description`}
          />
          <CustomInput
            label="Amount"
            value={amount}
            placeholder={"Enter Amount"}
            keyboardType="numeric"
            onChangeText={text => setAmonut(text)}
            maxLength={9}
            validation={isAmount}
            error={error}
            errorMsg={`${PLEASE_ENTER_VALID}Amount`}
          />
        </ScrollView>
      </>
    </CommonModal>
  )
}

export default DeclareDealForm