using Microsoft.AspNetCore.SignalR;

namespace SignalR.NET.Hubs;

public class NotifyHub : Hub
{
    public async override Task OnConnectedAsync()
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, "users");
        await base.OnConnectedAsync();
    }

    public async Task CreateNotify(string message)
    {
        await Clients.All.SendAsync("Notify", message);
    }
}