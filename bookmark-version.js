javascript:void%20function(){var%20a=Math.floor;let%20b=Array.from(document.getElementsByTagName(%22label%22)),c=b.filter(a=%3E{let%20b=Object.assign({},a.dataset),c=a.parentElement.parentElement.parentElement,d=a.parentElement,e=Object.assign({},d.dataset);return!!(b.hasOwnProperty(%22gardenId%22)%26%26%22forms.input_label%22===b.gardenId%26%26%22none%22!=c.style.display%26%26e.hasOwnProperty(%22testId%22)%26%26%22Followers%22!==a.innerText%26%26%22TRA%20-%20Problem%20Summary*%22!==a.innerText%26%26(e.testId.match(%22ticket-form-field-text-field%22)||e.testId.match(%22ticket-form-field-numeric-field%22)))});const%20d=a=%3E{let%20b=document.getElementById(a).value.toString();navigator.permissions.query({name:%22clipboard-write%22}).then(a=%3E{if(%22granted%22===a.state){const%20a=new%20Blob([b],{type:%22text/plain%22});let%20c=[new%20ClipboardItem({%22text/plain%22:a})];navigator.clipboard.write(c).then(()=%3Enull,a=%3Econsole.log(%22uh%20oh%22,a))}else%20alert(%22You%20need%20to%20grant%20clipboard%20permissions!%22)})};c.forEach(b=%3E{if(b.dataset.processed)return;let%20c=b.parentElement,e=document.createElement(%22a%22);e.innerText=%22Search%20Field%22,e.style.float=%22left%22,e.style.padding=%227px%205px%205px%22,e.style.fontSize=%2212px%22;let%20f=document.createElement(%22a%22);f.innerText=%22Search%20Value%22,f.style.float=%22right%22,f.style.padding=%227px%205px%205px%22,f.style.fontSize=%2212px%22,c.appendChild(e),c.appendChild(f);let%20g,h,i,j=b.parentElement.parentElement.parentElement,k=Object.assign({},j.classList),l=b.parentElement.childNodes[1],m=b=%3Ea(Math.random()*a(b));Object.keys(k).forEach(a=%3E{k[a].match(/custom_field_/)%26%26(i=k[a],g=i+%22:%22,h=i+%22:%22+l.value)});let%20n=document.createElement(%22input%22),o=document.createElement(%22input%22);o.style.display=%22none%22,o.value=g,o.id=m(9999999)+%22-%22+i+%22-field%22,n.style.display=%22none%22,n.value=h,n.id=m(9999999)+%22-%22+i+%22-value%22,c.appendChild(o),c.appendChild(n),e.addEventListener(%22click%22,()=%3Ed(o.id)),f.addEventListener(%22click%22,()=%3Ed(n.id)),b.dataset.processed=!0})}();
