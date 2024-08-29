import { StyleSheet } from 'react-native'
import { SvgProps } from 'react-native-svg'

import Arrow from './assets/icons/large-arrow.svg'
import AppLockout from './assets/img/app-lockout.svg'
import Biometrics from './assets/img/biometrics.svg'
import ContactBook from './assets/img/contact-book.svg'
import CredentialDeclined from './assets/img/credential-declined.svg'
import DeleteNotification from './assets/img/delete-notification.svg'
import EmptyWallet from './assets/img/empty-wallet.svg'
import IconCredentialOfferDark from './assets/img/icon-credential-offer-dark.svg'
import IconCredentialOfferLight from './assets/img/icon-credential-offer-light.svg'
import IconInfoRecievedDark from './assets/img/icon-info-recieved-dark.svg'
import IconInfoRecievedLight from './assets/img/icon-info-recieved-light.svg'
import IconInfoSentDark from './assets/img/icon-info-sent-dark.svg'
import IconInfoSentLight from './assets/img/icon-info-sent-light.svg'
import IconProofRequestDark from './assets/img/icon-proof-request-dark.svg'
import IconProofRequestLight from './assets/img/icon-proof-request-light.svg'
import Logo from './assets/img/logo.svg'
import NoInfoShared from './assets/img/no_information_shared.svg'
import Preface from './assets/img/preface.svg'
import ProofRequestDeclined from './assets/img/proof-declined.svg'
import VerifierRequestDeclined from './assets/img/verifier-request-declined.svg'

export interface ISVGAssets {
  appLockout: React.FC<SvgProps>
  biometrics: React.FC<SvgProps>
  contactBook: React.FC<SvgProps>
  credentialDeclined: React.FC<SvgProps>
  deleteNotification: React.FC<SvgProps>
  emptyWallet: React.FC<SvgProps>
  logo: React.FC<SvgProps>
  proofRequestDeclined: React.FC<SvgProps>
  arrow: React.FC<SvgProps>
  iconCredentialOfferDark: React.FC<SvgProps>
  iconCredentialOfferLight: React.FC<SvgProps>
  iconInfoRecievedDark: React.FC<SvgProps>
  iconInfoRecievedLight: React.FC<SvgProps>
  iconInfoSentDark: React.FC<SvgProps>
  iconInfoSentLight: React.FC<SvgProps>
  iconProofRequestDark: React.FC<SvgProps>
  iconProofRequestLight: React.FC<SvgProps>
  preface: React.FC<SvgProps>
  verifierRequestDeclined: React.FC<SvgProps>
  noInfoShared: React.FC<SvgProps>
}

export interface IFontAttributes {
  fontFamily?: string
  fontStyle?: 'normal' | 'italic'
  fontSize: number
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  color: string
}

export interface IInputAttributes {
  padding?: number
  borderRadius?: number
  fontSize?: number
  backgroundColor?: string
  color?: string
  borderWidth?: number
  borderColor?: string
}

export interface IInputs {
  label: IFontAttributes
  textInput: IInputAttributes
  inputSelected: IInputAttributes
  singleSelect: IInputAttributes
  singleSelectText: IFontAttributes
  singleSelectIcon: IInputAttributes
  checkBoxColor: IInputAttributes
  checkBoxText: IFontAttributes
}

export interface ITextTheme {
  headingOne: IFontAttributes
  headingTwo: IFontAttributes
  headingThree: IFontAttributes
  headingFour: IFontAttributes
  normal: IFontAttributes
  bold: IFontAttributes
  label: IFontAttributes
  labelTitle: IFontAttributes
  labelSubtitle: IFontAttributes
  labelText: IFontAttributes
  caption: IFontAttributes
  title: IFontAttributes
  headerTitle: IFontAttributes
  modalNormal: IFontAttributes
  modalTitle: IFontAttributes
  popupModalText: IFontAttributes
  modalHeadingOne: IFontAttributes
  modalHeadingThree: IFontAttributes
  settingsText: IFontAttributes
}

export interface IBrandColors {
  primary: string
  primaryDisabled: string
  secondary: string
  secondaryDisabled: string
  primaryLight: string
  highlight: string
  primaryBackground: string
  secondaryBackground: string
  modalPrimary: string
  modalSecondary: string
  modalPrimaryBackground: string
  modalSecondaryBackground: string
  modalIcon: string
  link: string
  text: string
  icon: string
  headerText: string
  headerIcon: string
  navigationIcon: string
  buttonText: string
  tabBarInactive: string
  unorderedList: string
  unorderedListModal: string
}

export interface ISemanticColors {
  error: string
  success: string
  focus: string
}

export interface INotificationColors {
  success: string
  successBorder: string
  successIcon: string
  successText: string
  info: string
  infoBorder: string
  infoIcon: string
  infoText: string
  warn: string
  warnBorder: string
  warnIcon: string
  warnText: string
  error: string
  errorBorder: string
  errorIcon: string
  errorText: string
  popupOverlay: string
}

export interface IGrayscaleColors {
  black: string
  darkGrey: string
  mediumGrey: string
  lightGrey: string
  veryLightGrey: string
  white: string
}

export interface IColorPallet {
  brand: IBrandColors
  semantic: ISemanticColors
  notification: INotificationColors
  grayscale: IGrayscaleColors
}

export interface IAssets {
  svg: ISVGAssets
  img: {
    logoPrimary: any
    logoSecondary: any
  }
}

export const borderRadius = 4
export const heavyOpacity = 0.7
export const mediumOpacity = 0.5
export const lightOpacity = 0.35
export const zeroOpacity = 0.0
export const borderWidth = 2

const GrayscaleColors: IGrayscaleColors = {
  black: '#000000',
  darkGrey: '#313132',
  mediumGrey: '#606060',
  lightGrey: '#D3D3D3',
  veryLightGrey: '#F2F2F2',
  white: '#FFFFFF',
}

const BrandColors: IBrandColors = {
  primary: '#9e83f5',
  primaryDisabled: `rgba(191, 181, 249, ${lightOpacity})`,
  secondary: '#5236ab',
  secondaryDisabled: `rgba(82, 54, 171, ${heavyOpacity})`,
  primaryLight: `rgba(82, 54, 171, ${lightOpacity})`,
  highlight: '#FCBA19',
  primaryBackground: '#FFFFFF',
  secondaryBackground: '#EEEEEE',
  modalPrimary: '#E31937',
  modalSecondary: '#000000',
  modalPrimaryBackground: '#FFFFFF',
  modalSecondaryBackground: '#ebebeb',
  modalIcon: GrayscaleColors.black,
  unorderedList: GrayscaleColors.black,
  unorderedListModal: GrayscaleColors.black,
  link: '#cb7ca3',
  text: GrayscaleColors.black,
  icon: GrayscaleColors.black,
  headerIcon: GrayscaleColors.black,
  navigationIcon: GrayscaleColors.white,
  headerText: GrayscaleColors.white,
  buttonText: GrayscaleColors.white,
  tabBarInactive: GrayscaleColors.mediumGrey,
}

const SemanticColors: ISemanticColors = {
  error: '#D8292F',
  success: '#1BCF40',
  focus: '#3399FF',
}

const NotificationColors: INotificationColors = {
  success: '#555555',
  successBorder: '#2E8540',
  successIcon: '#2E8540',
  successText: '#FFFFFF',
  info: '#555555',
  infoBorder: '#0099FF',
  infoIcon: '#0099FF',
  infoText: '#FFFFFF',
  warn: '#555555',
  warnBorder: '#FCBA19',
  warnIcon: '#FCBA19',
  warnText: '#FFFFFF',
  error: '#555555',
  errorBorder: '#D8292F',
  errorIcon: '#D8292F',
  errorText: '#FFFFFF',
  popupOverlay: `rgba(0, 0, 0, ${mediumOpacity})`,
}

export const ColorPallet: IColorPallet = {
  brand: BrandColors,
  semantic: SemanticColors,
  notification: NotificationColors,
  grayscale: GrayscaleColors,
}

export const TextTheme: ITextTheme = {
  headingOne: {
    fontSize: 38,
    fontFamily: 'Raleway-Regular',
    color: ColorPallet.brand.text,
  },
  headingTwo: {
    fontSize: 32,
    fontFamily: 'Raleway-Regular',
    color: ColorPallet.brand.text,
  },
  headingThree: {
    fontSize: 26,
    fontFamily: 'Raleway-Regular',
    color: ColorPallet.brand.text,
  },
  headingFour: {
    fontSize: 21,
    fontFamily: 'Raleway-Regular',
    color: ColorPallet.brand.text,
  },
  normal: {
    fontSize: 18,
    fontFamily: 'Raleway-Light',
    color: ColorPallet.brand.text,
  },
  bold: {
    fontSize: 18,
    fontFamily: 'Raleway-Bold',
    color: ColorPallet.brand.text,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    color: ColorPallet.brand.text,
  },
  labelTitle: {
    fontSize: 16,
    fontFamily: 'Raleway-Regular',
    color: ColorPallet.brand.text,
  },
  labelSubtitle: {
    fontSize: 14,
    fontFamily: 'Raleway-Light',
    color: ColorPallet.brand.text,
  },
  labelText: {
    fontSize: 10,
    fontFamily: 'Raleway-Italic',
    color: ColorPallet.brand.text,
  },
  caption: {
    fontSize: 14,
    fontFamily: 'Raleway-Light',
    color: ColorPallet.brand.text,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Raleway-Regular',
    color: ColorPallet.brand.text,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'Raleway-Regular',
    color: ColorPallet.brand.headerText,
  },
  modalNormal: {
    fontSize: 18,
    fontFamily: 'Raleway-Light',
    color: ColorPallet.grayscale.white,
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: 'Raleway-Regular',
    color: ColorPallet.grayscale.white,
  },
  modalHeadingOne: {
    fontSize: 38,
    fontFamily: 'Raleway-Regular',
    color: ColorPallet.grayscale.white,
  },
  modalHeadingThree: {
    fontSize: 26,
    fontFamily: 'Raleway-Regular',
    color: ColorPallet.grayscale.white,
  },
  popupModalText: {
    fontSize: 18,
    fontFamily: 'Raleway-Light',
    color: ColorPallet.grayscale.white,
  },
  settingsText: {
    fontSize: 21,
    fontFamily: 'Raleway-Light',
    color: ColorPallet.brand.text,
  },
}

export const Inputs: IInputs = StyleSheet.create({
  label: {
    ...TextTheme.label,
  },
  textInput: {
    padding: 10,
    borderRadius,
    fontSize: 16,
    backgroundColor: ColorPallet.brand.primaryBackground,
    color: ColorPallet.notification.infoText,
    borderWidth: 2,
    borderColor: ColorPallet.brand.secondary,
  },
  inputSelected: {
    borderColor: ColorPallet.brand.primary,
  },
  singleSelect: {
    padding: 12,
    borderRadius: borderRadius * 2,
    backgroundColor: ColorPallet.brand.secondaryBackground,
  },
  singleSelectText: {
    ...TextTheme.normal,
  },
  singleSelectIcon: {
    color: ColorPallet.grayscale.white,
  },
  checkBoxColor: {
    color: ColorPallet.brand.primary,
  },
  checkBoxText: {
    ...TextTheme.normal,
  },
})

export const Buttons = StyleSheet.create({
  critical: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPallet.brand.primary,
  },
  primary: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPallet.brand.primary,
  },
  primaryDisabled: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPallet.brand.primaryDisabled,
  },
  primaryText: {
    ...TextTheme.bold,
    color: ColorPallet.brand.buttonText,
    textAlign: 'center',
  },
  primaryTextDisabled: {
    ...TextTheme.bold,
    textAlign: 'center',
  },
  secondary: {
    padding: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ColorPallet.brand.primary,
  },
  secondaryDisabled: {
    padding: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ColorPallet.brand.secondaryDisabled,
  },
  secondaryText: {
    ...TextTheme.bold,
    color: ColorPallet.brand.primary,
    textAlign: 'center',
  },
  secondaryTextDisabled: {
    ...TextTheme.bold,
    color: ColorPallet.brand.secondaryDisabled,
    textAlign: 'center',
  },
  modalCritical: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPallet.brand.primary,
  },
  modalPrimary: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPallet.brand.modalPrimary,
  },
  modalPrimaryText: {
    ...TextTheme.bold,
    textAlign: 'center',
  },
  modalSecondary: {
    padding: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ColorPallet.brand.modalPrimary,
  },
  modalSecondaryText: {
    ...TextTheme.bold,
    color: ColorPallet.brand.modalPrimary,
    textAlign: 'center',
  },
})

export const ListItems = StyleSheet.create({
  credentialBackground: {
    backgroundColor: ColorPallet.brand.secondaryBackground,
  },
  credentialTitle: {
    ...TextTheme.headingFour,
  },
  credentialDetails: {
    ...TextTheme.caption,
  },
  credentialOfferBackground: {
    backgroundColor: ColorPallet.brand.modalPrimaryBackground,
  },
  credentialOfferTitle: {
    ...TextTheme.modalHeadingThree,
    fontWeight: 'normal',
  },
  credentialOfferDetails: {
    ...TextTheme.normal,
  },
  revoked: {
    backgroundColor: ColorPallet.notification.error,
    borderColor: ColorPallet.notification.errorBorder,
  },
  contactBackground: {
    backgroundColor: ColorPallet.brand.secondaryBackground,
  },
  credentialIconColor: {
    color: ColorPallet.notification.infoText,
  },
  contactTitle: {
    color: ColorPallet.brand.text,
  },
  contactDate: {
    color: ColorPallet.brand.text,
    marginTop: 10,
  },
  contactIconBackground: {
    backgroundColor: ColorPallet.brand.primary,
  },
  contactIcon: {
    color: ColorPallet.grayscale.white,
  },
  recordAttributeLabel: {
    ...TextTheme.bold,
  },
  recordContainer: {
    backgroundColor: ColorPallet.brand.secondaryBackground,
  },
  recordBorder: {
    borderBottomColor: ColorPallet.brand.primaryBackground,
  },
  recordLink: {
    color: ColorPallet.brand.link,
  },
  recordAttributeText: {
    ...TextTheme.normal,
  },
  proofIcon: {
    ...TextTheme.headingOne,
  },
  proofError: {
    color: ColorPallet.semantic.error,
  },
  avatarText: {
    ...TextTheme.headingTwo,
    fontWeight: 'normal',
  },
  avatarCircle: {
    borderRadius: TextTheme.headingTwo.fontSize,
    borderColor: TextTheme.headingTwo.color,
    width: TextTheme.headingTwo.fontSize * 2,
    height: TextTheme.headingTwo.fontSize * 2,
  },
  emptyList: {
    ...TextTheme.normal,
  },
  requestTemplateBackground: {
    backgroundColor: ColorPallet.grayscale.white,
  },
  requestTemplateIconColor: {
    color: ColorPallet.notification.infoText,
  },
  requestTemplateTitle: {
    color: ColorPallet.grayscale.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  requestTemplateDetails: {
    color: ColorPallet.grayscale.black,
    fontWeight: 'normal',
    fontSize: 16,
  },
  requestTemplateZkpLabel: {
    color: ColorPallet.grayscale.mediumGrey,
    fontSize: 12,
  },
  requestTemplateIcon: {
    color: ColorPallet.grayscale.black,
    fontSize: 36,
  },
  requestTemplateDate: {
    color: ColorPallet.grayscale.mediumGrey,
    fontSize: 10,
  },
})

export const TabTheme = {
  tabBarStyle: {
    height: 60,
    backgroundColor: ColorPallet.brand.secondaryBackground,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 6,
    shadowColor: ColorPallet.grayscale.black,
    shadowOpacity: 0.1,
    borderTopWidth: 0,
    paddingBottom: 0,
  },
  tabBarContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarActiveTintColor: ColorPallet.brand.primary,
  tabBarInactiveTintColor: ColorPallet.brand.tabBarInactive,
  tabBarTextStyle: {
    ...TextTheme.labelSubtitle,
    paddingBottom: 5,
  },
  tabBarButtonIconStyle: {
    color: ColorPallet.brand.navigationIcon,
  },
  focusTabIconStyle: {
    height: 60,
    width: 60,
    backgroundColor: ColorPallet.brand.primary,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusTabActiveTintColor: {
    backgroundColor: ColorPallet.brand.secondary,
  },
}

export const NavigationTheme = {
  dark: true,
  colors: {
    primary: ColorPallet.brand.primary,
    background: ColorPallet.brand.primaryBackground,
    card: ColorPallet.brand.primary,
    text: ColorPallet.grayscale.white,
    border: ColorPallet.grayscale.white,
    notification: ColorPallet.grayscale.white,
  },
}

export const HomeTheme = StyleSheet.create({
  welcomeHeader: {
    ...TextTheme.headingOne,
  },
  credentialMsg: {
    ...TextTheme.normal,
  },
  notificationsHeader: {
    ...TextTheme.headingThree,
  },
  noNewUpdatesText: {
    ...TextTheme.normal,
    color: ColorPallet.notification.infoText,
  },
  link: {
    ...TextTheme.normal,
    color: ColorPallet.brand.link,
  },
})

export const SettingsTheme = {
  groupHeader: {
    ...TextTheme.normal,
    marginBottom: 8,
  },
  groupBackground: ColorPallet.brand.secondaryBackground,
  iconColor: TextTheme.normal.color,
  text: {
    ...TextTheme.caption,
    color: ColorPallet.grayscale.white,
  },
}

export const ChatTheme = {
  containerStyle: {
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
  },
  leftBubble: {
    backgroundColor: ColorPallet.brand.secondaryBackground,
    borderRadius: 4,
    padding: 16,
    marginLeft: 16,
  },
  rightBubble: {
    backgroundColor: ColorPallet.brand.primaryLight,
    borderRadius: 4,
    padding: 16,
    marginRight: 16,
  },
  timeStyleLeft: {
    color: ColorPallet.grayscale.lightGrey,
    fontSize: 12,
    marginTop: 8,
  },
  timeStyleRight: {
    color: ColorPallet.grayscale.lightGrey,
    fontSize: 12,
    marginTop: 8,
  },
  leftText: {
    color: ColorPallet.brand.secondary,
    fontSize: TextTheme.normal.fontSize,
  },
  leftTextHighlighted: {
    ...TextTheme.bold,
    color: ColorPallet.brand.secondary,
  },
  rightText: {
    color: ColorPallet.brand.secondary,
    fontSize: TextTheme.normal.fontSize,
  },
  rightTextHighlighted: {
    ...TextTheme.bold,
    color: ColorPallet.brand.secondary,
  },
  inputToolbar: {
    backgroundColor: ColorPallet.brand.secondary,
    shadowColor: ColorPallet.brand.primaryDisabled,
    borderRadius: 10,
  },
  inputText: {
    lineHeight: undefined,
    fontWeight: '500',
    fontSize: TextTheme.normal.fontSize,
  },
  placeholderText: ColorPallet.grayscale.lightGrey,
  sendContainer: {
    marginBottom: 4,
    paddingHorizontal: 4,
    justifyContent: 'center',
  },
  sendEnabled: ColorPallet.brand.primary,
  sendDisabled: ColorPallet.brand.primaryDisabled,
  options: ColorPallet.brand.primary,
  optionsText: ColorPallet.grayscale.black,
  openButtonStyle: {
    borderRadius: 32,
    backgroundColor: ColorPallet.brand.primary,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 16,
  },
  openButtonTextStyle: {
    fontSize: TextTheme.normal.fontSize,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  documentIconContainer: {
    backgroundColor: ColorPallet.brand.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  documentIcon: {
    color: ColorPallet.grayscale.white,
  },
}

export const OnboardingTheme = {
  container: {
    backgroundColor: ColorPallet.brand.primaryBackground,
  },
  carouselContainer: {
    backgroundColor: ColorPallet.brand.primaryBackground,
  },
  pagerDot: {
    borderColor: ColorPallet.grayscale.lightGrey,
  },
  pagerDotActive: {
    color: ColorPallet.grayscale.lightGrey,
  },
  pagerDotInactive: {
    color: ColorPallet.grayscale.veryLightGrey,
  },
  pagerNavigationButton: {
    // color: ColorPallet.grayscale.mediumGrey,
    // fontFamily: 'Raleway-Medium',
    // fontSize: 18,
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    backgroundColor:'#ffcdd2',
    borderRadius:50,
  },
  headerTintColor: ColorPallet.grayscale.white,
  headerText: {
    ...TextTheme.headingFour,
  },
  bodyText: {
    ...TextTheme.normal,
  },
  imageDisplayOptions: {
    fill: ColorPallet.notification.infoText,
  },
}

export const DialogTheme = {
  modalView: {
    backgroundColor: ColorPallet.brand.secondaryBackground,
  },
  titleText: {
    color: ColorPallet.grayscale.white,
  },
  description: {
    color: ColorPallet.grayscale.white,
  },
  closeButtonIcon: {
    color: ColorPallet.grayscale.white,
  },
  carouselButtonText: {
    color: ColorPallet.grayscale.white,
  },
}

const LoadingTheme = {
  backgroundColor: ColorPallet.brand.modalPrimaryBackground,
}
const PINEnterTheme = {
  image: {
    alignSelf: 'center',
    marginBottom: 20,
  },
}
const PINInputTheme = {
  cell: {
    backgroundColor: ColorPallet.brand.secondaryBackground,
    borderColor: ColorPallet.brand.secondary,
    borderWidth: 1,
  },
  focussedCell: {
    borderColor: ColorPallet.brand.headerIcon,
  },
  cellText: {
    color: ColorPallet.brand.text,
  },
  icon: {
    color: ColorPallet.brand.headerIcon,
  },
}

export const Assets = {
  svg: {
    appLockout: AppLockout,
    biometrics: Biometrics,
    credentialDeclined: CredentialDeclined,
    deleteNotification: DeleteNotification,
    emptyWallet: EmptyWallet,
    contactBook: ContactBook,
    logo: Logo,
    proofRequestDeclined: ProofRequestDeclined,
    arrow: Arrow,
    iconCredentialOfferDark: IconCredentialOfferDark,
    iconCredentialOfferLight: IconCredentialOfferLight,
    iconInfoRecievedDark: IconInfoRecievedDark,
    iconInfoRecievedLight: IconInfoRecievedLight,
    iconInfoSentDark: IconInfoSentDark,
    iconInfoSentLight: IconInfoSentLight,
    iconProofRequestDark: IconProofRequestDark,
    iconProofRequestLight: IconProofRequestLight,
    preface: Preface,
    verifierRequestDeclined: VerifierRequestDeclined,
    noInfoShared: NoInfoShared,
  },
  img: {
    logoPrimary: {
      src: require('./assets/img/logo-large.png'),
      aspectRatio: 1,
      height: '33%',
      width: '33%',
      resizeMode: 'contain',
    },
    logoSecondary: {
      src: require('./assets/img/logo-large.png'),
      aspectRatio: 1,
      height: 120,
      width: 120,
      resizeMode: 'contain',
    },
  },
}

export interface ITheme {
  ColorPallet: IColorPallet
  TextTheme: ITextTheme
  Inputs: IInputs
  Buttons: any
  ListItems: any
  TabTheme: any
  NavigationTheme: any
  HomeTheme: any
  SettingsTheme: any
  ChatTheme: any
  OnboardingTheme: any
  DialogTheme: any
  LoadingTheme: any
  PINEnterTheme: any
  PINInputTheme: any
  heavyOpacity: any
  borderRadius: any
  borderWidth: typeof borderWidth
  Assets: IAssets
}

export const theme: ITheme = {
  ColorPallet,
  TextTheme,
  Inputs,
  Buttons,
  ListItems,
  TabTheme,
  NavigationTheme,
  HomeTheme,
  SettingsTheme,
  ChatTheme,
  OnboardingTheme,
  DialogTheme,
  LoadingTheme,
  PINEnterTheme,
  PINInputTheme,
  heavyOpacity,
  borderRadius,
  borderWidth,
  Assets,
}
