import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const members = [
  { id: 1, name: "Jane Doe", email: "jane.doe@example.com", initials: "JD" },
  {
    id: 2,
    name: "John Smith",
    email: "john.smith@example.com",
    initials: "JS",
  },
  { id: 3, name: "Alex Johnson", email: "alex.j@example.com", initials: "AJ" },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-card-foreground">
            Profile Settings
          </h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <Button variant="outline">Change Photo</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-card-foreground">
                First Name
              </label>
              <Input defaultValue="Jane" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-card-foreground">
                Last Name
              </label>
              <Input defaultValue="Doe" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-card-foreground">
                Email
              </label>
              <Input defaultValue="jane.doe@example.com" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-card-foreground">
                Phone
              </label>
              <Input defaultValue="+1 (555) 123-4567" className="mt-1" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Role */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-card-foreground">Role</h3>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Your current role</p>
            <div className="mt-2">
              <Badge className="px-3">Admin</Badge>
            </div>
          </div>
          <Button variant="outline">Request Change</Button>
        </CardContent>
      </Card>

      {/* Members */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-card-foreground">
            Members
          </h3>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Invite new member */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Invite by email"
              className="sm:flex-1"
            />
            <Button>Send Invite</Button>
          </div>
          <p className="text-xs text-muted-foreground">
            An email invitation will be sent to join this workspace.
          </p>

          {/* Members list */}
          <div className="divide-y divide-border rounded-md border border-border">
            {members.map((m) => (
              <div key={m.id} className="flex items-center gap-3 p-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage />
                  <AvatarFallback>{m.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-card-foreground truncate">
                    {m.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {m.email}
                  </p>
                </div>
                <Badge variant="secondary">Member</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Current Subscription */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-card-foreground">
            Current Subscription
          </h3>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Plan</p>
            <p className="text-base font-medium text-card-foreground">
              Premium
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Renews</p>
            <p className="text-base font-medium text-card-foreground">
              Dec 31, 2024
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Seats</p>
            <p className="text-base font-medium text-card-foreground">
              5 of 10 used
            </p>
          </div>
          <div className="md:col-span-3 flex gap-2 justify-end">
            <Button variant="outline">Cancel</Button>
            <Button>Manage Billing</Button>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
