var title = '<td class="tow three">序号</td>'+
            '<td class="tow three">合同编号</td>'+
            '<td class="tow three">下单日期</td>'+
            '<td class="tow three">预计完工日期</td>';
;
$(".title").append(title);
$.getJSON({  
    type: "get",  
    url:"./sale.json",  
    async: false, 
    cache:false,
    dataType:"json", 
    success: function(e) {
        console.log(e); 
        if(e.state == 1){
             /*加载预付款流程信息*/
             
            $.each(e.data, function(idx,obj){
                var length = obj.list.length;
                length = length+1;
                var cont = '<td class="tow" rowspan="'+length+'">'+obj.id+'</td>'+
                       '<td class="tow" rowspan="'+length+'">'+obj.content+'</td>'+
                       '<td class="tow" rowspan="'+length+'">'+obj.date_order+'</td>';
                $(".content").append(cont);
            }); 
            
            $.each(e.data.date.list, function(idx,obj){
                var info = '<tr class="sale">'+
                             '<td class="tow">'+obj.date+'</td>'+
                                '<td class="tow">'+obj.name+'</td>'+
                                '<td class="tow">'+obj.vsession+'</td>'+
                                '<td class="tow">'+obj.number+'</td>'+
                                '<td class="tow">'+obj.one_price+'</td>'+
                                '<td class="tow">'+obj.one_price_all+'</td>'+
                                '<td class="tow">'+obj.product_price+'</td>'+
                                '<td class="tow">'+obj.product_all_price+'</td>'+
                              '</tr>';
                $(".content").append(info);
            }); 
        }
       
    }  
}); 