<%- include("partials/header") %>

<div class='container'>
    <h1 style='text-align:center'>Edit <%=temple.name %></h1>
    <div style="margin:30px auto; width:30%">

    <form action="/temples/<%=temple._id%>?_method=PUT" method="POST">
    
    <div class="form-group">
<input type='text' class="form-control" name='temple[name]' value="<%=temple.name %>"></input>
</div>

<div class="form-group">
<input type='text' class="form-control" name='temple[img]' value="<%=temple.img %>"></input>
</div>

<div class="form-group">
    <input type='text' class="form-control" name='temple[desc]' value="<%=temple.desc %>"></input>
    </div>

<div class="form-group">
<button action='submit' class='btn btn-lg btn-primary btn-block'>Submit</button>
</div>

</form>
</div>
</div>

<%- include("partials/footer") %>