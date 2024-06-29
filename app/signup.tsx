import { useColorScheme } from '@/hooks/useColorScheme.web';
import { ScrollView } from 'react-native-gesture-handler';
import { StepNavigation, StepView } from 'react-native-step-view-navigation';
import { useState } from 'react';
import SignupEmailView from '@/components/SignupEmailView';
import SignupEmailSelectionView from '@/components/SignupEmailSelectionView';

export default function LoginScreen() {
  const [step, setStep] = useState(1);
  const colorScheme = useColorScheme();
  
  return (
    <ScrollView>
        <StepNavigation step={step} dots={false}>
          <StepView>
            <SignupEmailSelectionView stepFunction={setStep} />
          </StepView>
          <StepView>
            <SignupEmailView stepFunction={setStep} />
          </StepView>
        </StepNavigation>       
    </ScrollView>
  );
}
