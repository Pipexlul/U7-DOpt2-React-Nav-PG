interface NavLink {
  label: string;
  isActive: boolean;
}

interface FormInputValues {
  name: string;
  value: string;
}

interface FormChild {
  labelName: string;
  type: "text" | "submit" | "color";
}

interface Form {
  formName: string;
  submitAction: (event: React.FormEvent<HTMLFormElement>) => void;
  children: FormChild[];
}

export type {
  NavLink as NavLinkProps,
  Form as FormProps,
  FormInputValues,
  FormChild,
};
