let get_table = text => {
    let table = []
    let table_column_align = [];
    let table_column_num;

    let error = false;

    // 스플릿 및 빈 줄 제거
    const hasCarriage = /\r\n?/g;
    const tooManyNewLine = /\n+$/g;
    normalized = text
        .replace(hasCarriage, '\n') //케리지 리턴 변환
        .replace(tooManyNewLine, '\n') // 많은 빈 줄 변환
        .split('\n');
    
    // 토큰화
    normalized.forEach((e, index) => {
        let row = []
        splited_text = e.split("|")
        splited_text.pop()
        splited_text.shift()

        if (index == 0 && splited_text.length >= 1) { table_column_num = splited_text.length }
        if (e == "") {return}
        if (splited_text.length != table_column_num) { error = true;}
        // 첫 번째 인덱스
        if (index == 1) {
            splited_text.forEach(ee => {
                const exp = /\:?-+\:?/
                if (exp.test(ee)) {
                    ee = ee.trim()
                    const exp_left = /^\:-+$/
                    const exp_center = /^\:-+\:$/
                    const exp_right = /^-+\:$/
                    if (exp_left.test(ee)) {table_column_align.push("left"); return}
                    else if (exp_center.test(ee)) {table_column_align.push("center"); return}
                    else if (exp_right.test(ee)) {table_column_align.push("right"); return}
                    else {table_column_align.push("left"); return}
                } else {
                    if (ee != "") {ee.trim()}
                    row.push(ee)
                }
            })
            table.push(row)
        } else {
            splited_text.forEach(ee => {
                if (ee != "") {ee.trim()}
                row.push(ee)
            })
            table.push(row)
        }
    });

    if (error) {return false}
    
    // HTMl 변환
    html = '<table>'
    table.forEach((row, row_index) => {
        html = html + '<tr>'
        if (table_column_align.length > 0) {
            if (row_index == 0) {
                row.forEach((sell,sell_index) => {
                    html = html + `<td class="table_column" style="text-align: ${table_column_align[sell_index]};">${sell}</td>`
                })
            } else {
                row.forEach((sell,sell_index) => {
                    html = html + `<td style="text-align: ${table_column_align[sell_index]};">${sell}</td>`
                })
            }
        } else {
            row.forEach(sell => {
                html = html + `<td>${sell}</td>`
            })
        }
        html = html + '</tr>'
    })
    html = html + '</table>'

    return html
}