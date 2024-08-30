import { useLanguageStore } from "@/store/store";
import * as React from "react";

export interface IErroTextCntProps {
  isEmpty: boolean;
  isValid: boolean;
}

export default function ErroTextCnt(props: IErroTextCntProps) {
  const lang = useLanguageStore((state) => state.language);

  return (
    <div className="input-err-cnt">
      {props.isEmpty && <span className="err-text">{lang.required}</span>}
      {props.isValid && !props.isEmpty && (
        <span className="err-text">{lang.invalid_format}</span>
      )}
    </div>
  );
}
