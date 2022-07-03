import { Component } from "react";
 import { nanoid } from "@reduxjs/toolkit";
 import {
   TextWrapper,
   RadioInput,
   TextArrtibute,
   ColorAttribute,
   RadioInputColor,
   AttributesWrap,
 } from "./styles/AttributeInput";

 class ProductAttributes extends Component {
   constructor(props) {
     super(props);
     this.state = {
       attributeGroup: nanoid(),
     };
   }

   sendSelectedAtributesToParent = (e) => {
     const name = e.currentTarget.getAttribute("name");
     const value = e.currentTarget.getAttribute("value");
     this.props.onSelecetAttribute({ name, value });
   };

   render() {
     const { type, items, name } = this.props.attribute;

     return (
       <>
         {this.props.attribute.name}{" "}
         <AttributesWrap>
           {items.map((item, i) => {
             const uniqeInpuId = nanoid();
             if (type === "swatch") {
               return (
                 <TextWrapper>
                   <RadioInputColor
                     type="radio"
                     id={uniqeInpuId}
                     name={this.state.attributeGroup}
                   />
                   <ColorAttribute
                     onClick={this.sendSelectedAtributesToParent}
                     value={item.value}
                     color={item.value}
                     htmlFor={uniqeInpuId}
                     title={item.displayValue}
                     name={name}
                   ></ColorAttribute>
                 </TextWrapper>
               );
             }
             return (
               <TextWrapper>
                 <RadioInput
                   type="radio"
                   id={uniqeInpuId}
                   name={this.state.attributeGroup}
                 />
                 <TextArrtibute
                   onClick={this.sendSelectedAtributesToParent}
                   name={name}
                   value={item.value}
                   htmlFor={uniqeInpuId}
                 >
                   {item.value}
                 </TextArrtibute>
               </TextWrapper>
             );
           })}
         </AttributesWrap>
       </>
     );
   }
 }

export default ProductAttributes;
